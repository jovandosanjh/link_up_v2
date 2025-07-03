import * as Location from 'expo-location';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

export async function updateUserLocation() {
  const user = auth.currentUser;

  if (!user) {
    console.warn('⛔ User not logged in — cannot update location');
    return;
  }

  const uid = user.uid;
  const email = user.email;

  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    console.warn('📵 Location permission denied');
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  const locationData = {
    name: email,
    latitude: latitude,
    longitude: longitude,
    lastUpdated: serverTimestamp(),
  };

  await setDoc(doc(db, 'userLocations', uid), locationData);

  console.log('📍 Location updated!');
}
