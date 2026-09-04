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

// Koleksi Firestore: kalender_libur/{id} -> { tanggal: 'YYYY-MM-DD', keterangan, createdAt }
// Dibaca publik (tanpa login) oleh halaman /kalender-libur, ditulis admin dari dashboard.
export function useKalenderLibur() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'kalender_libur'), orderBy('tanggal', 'asc'))

    const unsub = onSnapshot(
      q,
      (snap) => {
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
        setLoading(false)
      },
      (err) => {
        console.error('Gagal memuat kalender libur:', err)
        setLoading(false)
      }
    )

    return () => unsub()
  }, [])

  async function tambah(tanggal, keterangan) {
    await addDoc(collection(db, 'kalender_libur'), {
      tanggal,
      keterangan,
      createdAt: serverTimestamp(),
    })
  }

  async function hapus(id) {
    await deleteDoc(doc(db, 'kalender_libur', id))
  }

  return { items, loading, tambah, hapus }
}
