// App.js
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <LinearGradient
      colors={['#6C63FF', '#956FE7']}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Logo / Title */}
        <View style={styles.header}>
          <Feather name="map-pin" size={48} color="#fff" />
          <Text style={styles.title}>Link Up</Text>
          <Text style={styles.tagline}>Find the perfect meet-up spot</Text>
        </View>

        {/* Call-to-action buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryText}>Plan a Link Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryText}>Join a Friend</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Powered by smart routing & fair-distance math.
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '700',
    marginTop: 12,
  },
  tagline: {
    color: '#EDEBFF',
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 24,
  },
  actions: {
    gap: 16,
  },
  primaryBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 4,
  },
  primaryText: {
    color: '#6C63FF',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryBtn: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    color: '#D8D6FF',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 24,
  },
});
