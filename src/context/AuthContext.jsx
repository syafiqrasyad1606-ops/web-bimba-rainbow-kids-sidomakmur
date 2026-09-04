import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
  setLoading(true)
  setUser(firebaseUser)
  if (firebaseUser) {
        try {
          const snap = await getDoc(doc(db, 'users', firebaseUser.uid))
          setProfile(snap.exists() ? snap.data() : null)
        } catch (err) {
          console.error('Gagal mengambil profil pengguna:', err)
          setProfile(null)
        }
      } else {
        setProfile(null)
      }

      setLoading(false)
    })

    return () => unsub()
  }, [])

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    await signOut(auth)
  }

  const value = { user, profile, loading, login, logout }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)

  if (!ctx) {
    throw new Error('useAuth harus dipakai di dalam <AuthProvider>')
  }

  return ctx
}
