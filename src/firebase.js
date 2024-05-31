// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'instagram-c1caa.firebaseapp.com',
  projectId: 'instagram-c1caa',
  storageBucket: 'instagram-c1caa.appspot.com',
  messagingSenderId: '939731729566',
  appId: '1:939731729566:web:8e0c5259a9fceea51ccf8f'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write: if
//         request.resource.size < 2 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//       }
//     }
//   }