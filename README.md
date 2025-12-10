# Puzzly

A real-time collaborative puzzle application built with React Native and Swift for iOS. Users can add each other by unique IDs and work simultaneously on a shared canvas to solve puzzles together.

## Technology Stack

### Frontend

- **React Native** (TypeScript) - iOS mobile framework
- **React Navigation** - Screen navigation
- **React Native Reanimated** - Smooth animations
- **React Native Gesture Handler** - Touch gestures
- **React Native SVG** or **React Native Skia** - Canvas rendering
- **React Native Image Manipulator** - Image processing for puzzle generation

### Backend & Real-time

- **Firebase Realtime Database** - Real-time data synchronization
- **Firebase Authentication** - User authentication and management
- **Firebase Storage** - Image storage for puzzles
- **Firebase Cloud Functions** (optional) - Server-side logic

### Native iOS

- **Swift** - iOS native modules and optimizations
- **Objective-C** - Bridge between Swift and React Native (if required)

## Project Structure

```
Puzzly/
├── mobile/              # React Native application
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── screens/     # App screens
│   │   ├── services/    # Business logic
│   │   ├── hooks/       # Custom React hooks
│   │   └── utils/       # Utilities
│   └── ios/             # iOS native code
├── firebase/            # Firebase configuration
└── docs/               # Documentation
```
