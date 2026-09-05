import { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

// Koleksi Firestore: pengumuman/{id} -> { judul, isi, createdAt }
export function usePengumuman() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(
      collection(db, 'pengumuman'),
      orderBy('createdAt', 'desc')
    )

    const unsub = onSnapshot(
      q,
      (snap) => {
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
        setLoading(false)
      },
      (err) => {
        console.error('Gagal memuat pengumuman:', err)
        setLoading(false)
      }
    )

    return () => unsub()
  }, [])

  async function tambah(judul, isi) {
    await addDoc(collection(db, 'pengumuman'), {
      judul,
      isi,
      createdAt: serverTimestamp(),
    })
  }

  async function hapus(id) {
    await deleteDoc(doc(db, 'pengumuman', id))
  }

  return { items, loading, tambah, hapus }
}