// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.EXPO_PUBLIC_firebaseConfig_apiKey,
   authDomain: process.env.EXPO_PUBLIC_firebaseConfig_authDomain,
   databaseURL: process.env.EXPO_PUBLIC_firebaseConfig_databaseURL,
   projectId: process.env.EXPO_PUBLIC_firebaseConfig_projectId,
   storageBucket: process.env.EXPO_PUBLIC_firebaseConfig_storageBucket,
   messagingSenderId: process.env.EXPO_PUBLIC_firebaseConfig_messagingSenderId,
   appId: process.env.EXPO_PUBLIC_firebaseConfig_appId,
   measurementId: process.env.EXPO_PUBLIC_firebaseConfig_measurementId
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
