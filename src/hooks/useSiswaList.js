import { useEffect, useState } from 'react'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../firebase'

export function useSiswaList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'siswa'), orderBy('nama'))
    const unsub = onSnapshot(
      q,
      (snap) => {
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
        setLoading(false)
      },
      (err) => {
        console.error('Gagal mengambil data siswa:', err)
        setLoading(false)
      }
    )
    return () => unsub()
  }, [])

  async function tambah(nama, kelas) {
    await addDoc(collection(db, 'siswa'), { nama, kelas })
  }

  async function edit(id, nama, kelas) {
    await updateDoc(doc(db, 'siswa', id), { nama, kelas })
  }

  async function hapus(id) {
    await deleteDoc(doc(db, 'siswa', id))
  }

  return { items, loading, tambah, edit, hapus }
}