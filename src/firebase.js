// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// GANTI dengan config asli project Firebase lo:
// Firebase Console > Project Settings > General > Your apps > SDK setup
const firebaseConfig = {
  apiKey: 'GANTI_DENGAN_API_KEY',
  authDomain: 'GANTI.firebaseapp.com',
  projectId: 'GANTI_PROJECT_ID',
  storageBucket: 'GANTI.appspot.com',
  messagingSenderId: 'GANTI',
  appId: 'GANTI',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
