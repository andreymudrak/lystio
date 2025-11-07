import { create } from 'zustand'
import { api } from '@/services/api'
import { Location } from '@/types'

interface BoundariesStore {
  boundaries: Location[]
  loading: boolean
  fetchBoundaries: () => Promise<void>
}

const useBoundariesStore = create<BoundariesStore>((set) => ({
  boundaries: [],
  loading: false,
  fetchBoundaries: async () => {
    try {
      set({ loading: true })
      const boundaries = await api.getBoundaries()
      set(() => ({
        boundaries,
      }))
    } catch (error) {
      console.error('Failed to fetch boundraries:', error)
    } finally {
      set({ loading: false })
    }
  },
}))

export default useBoundariesStore
