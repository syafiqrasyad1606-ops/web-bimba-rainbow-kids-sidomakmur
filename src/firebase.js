// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// GANTI dengan config asli project Firebase lo:
// Firebase Console > Project Settings > General > Your apps > SDK setup
const firebaseConfig = {
apiKey: "AIzaSyADVOVeNotcpNydaRPwRP8fgSoqMZwyAL8",

  authDomain: "bimba-rainbow-kids-sidomakmur.firebaseapp.com",

  projectId: "bimba-rainbow-kids-sidomakmur",

  storageBucket: "bimba-rainbow-kids-sidomakmur.firebasestorage.app",

  messagingSenderId: "528193321608",

  appId: "1:528193321608:web:0456604f0b0fca8ce0fd3d",

}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
