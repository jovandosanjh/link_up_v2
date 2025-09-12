# LinkUp

LinkUp is a React Native (Expo) mobile app that helps groups find
central meeting spots and discover venues. It calculates geographic
midpoints and recommends restaurants or places using **Google Maps**,
**Yelp Fusion**, and **OpenAI APIs**.

Authentication and collaboration are powered by **Firebase Auth** and
**Firestore**, supporting real-time updates. The UI includes map pins,
interactive cards, and swipeable actions.

------------------------------------------------------------------------

## Techniques Used

-   **[React Native
    Components](https://reactnative.dev/docs/components-and-apis)** for
    cross-platform UI development.\
-   **[Expo](https://docs.expo.dev/)** for streamlined builds and
    testing across iOS and Android.\
-   **Custom Hooks** (`hooks/`) to encapsulate shared logic like API
    calls or state management.\
-   **Reusable Components** (`components/`) for maps, cards, and
    interactive UI widgets.\
-   **[Firebase Auth](https://firebase.google.com/docs/auth)** and
    **[Firestore](https://firebase.google.com/docs/firestore)** for
    secure login and real-time data sync.\
-   **[Google Maps
    SDK](https://developers.google.com/maps/documentation)** for
    geolocation and midpoint calculation.\
-   **[Yelp Fusion
    API](https://docs.developer.yelp.com/docs/fusion-intro)** for venue
    recommendations.\
-   **[OpenAI API](https://platform.openai.com/docs/)** for AI-driven
    insights and contextual suggestions.\
-   **[ESLint](https://eslint.org/)** with a custom config for
    consistent code quality.\
-   **[TypeScript](https://www.typescriptlang.org/)** integration
    alongside JavaScript for type safety and better developer tooling.

------------------------------------------------------------------------

## Notable Technologies and Libraries

-   **React Native (Expo)** --- unified app development across
    iOS/Android.\
-   **Firebase** --- authentication and real-time database sync.\
-   **Google Maps** + **Yelp Fusion** --- geospatial and venue
    discovery.\
-   **OpenAI API** --- adds contextual intelligence.\
-   **TypeScript** --- improves maintainability and scalability.\
-   **Kotlin (Android folder)** --- native extensions or
    platform-specific features.

------------------------------------------------------------------------

## Project Structure

``` bash
.
├── .vscode/          # Editor configuration
├── android/          # Native Android build files (Kotlin/Gradle)
├── app/              # Main app codebase
├── assets/           # App icons and splash assets
├── components/       # Reusable React Native UI components
├── constants/        # Shared constants (API keys, config, styles)
├── hooks/            # Custom React hooks for state and data fetching
├── scripts/          # Project automation or setup scripts
├── .gitignore
├── README.md
├── app.json          # Expo app configuration
├── eslint.config.js  # Linting rules
├── firebase.js       # Firebase setup and initialization
├── package.json      # Dependencies and scripts
├── package-lock.json
└── tsconfig.json     # TypeScript configuration
```

------------------------------------------------------------------------
