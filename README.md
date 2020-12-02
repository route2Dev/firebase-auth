# React with Firebase Auth

## Prerequisites
* [Firebase Project](https://console.firebase.google.com/)

## Configuration
1. Add your configuration values from your project to the react-firebase-auth .env file or a .env.development file.
2. Generate a Private key for your Firebase project. The contents of the file generated from creating a private key should be added to the firebase_admin_sdk.local.json file in firebase-auth/keys. (You will need to create the file in your project)
3. Add the Project ID for your Firebase project to the appsettings.json file. `"FirebaseProjectId": "<your-app-here>"`
