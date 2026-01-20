# Puzzly

## Folder Structure

```
puzzly/
├── mobile/                    # React Native mobile app
│   ├── ios/                   # iOS native code
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/        # UI components
│   │   │   ├── Canvas/
│   │   │   ├── common/
│   │   │   └── User/
│   │   ├── hooks/            # Custom React hooks
│   │   ├── navigation/      # Navigation setup
│   │   ├── screens/          # App screens
│   │   ├── services/         # Business logic
│   │   │   ├── collaboration/
│   │   │   ├── firebase/
│   │   │   └── puzzle/
│   │   └── utils/            # Utility functions
│   ├── metro.config.js
│   ├── package.json
│   └── tsconfig.json
│
├── campnion-site/             # Next.js web companion site
│   ├── public/
│   ├── src/
│   │   ├── app/              # Next.js app router
│   │   ├── components/       # UI components
│   │   │   ├── Canvas/
│   │   │   ├── common/
│   │   │   └── User/
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   ├── services/        # Business logic
│   │   │   ├── collaboration/
│   │   │   ├── firebase/
│   │   │   └── puzzle/
│   │   └── utils/           # Utility functions
│   ├── next.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
│
└── database/                 # Database configuration
    └── firebase/             # Firebase configuration
        ├── database.rules.json
        ├── firebase.json
        ├── functions/        # Cloud Functions
        └── storage.rules
```
