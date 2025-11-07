import { create } from 'zustand'
import { api } from '@/services/api'
import { FilterRequest, Location } from '@/types'

interface PriceHistoramStore {
  priceRange: [number, number]
  loading: boolean
  fetchPriceHistogram: (filter: FilterRequest) => Promise<void>
}

const usePriceHistoramStore = create<PriceHistoramStore>((set) => ({
  priceRange: [0, 0],
  loading: false,
  fetchPriceHistogram: async (filter: FilterRequest) => {
    try {
      set({ loading: true })
      const response = await api.getPriceHistogram(filter)
      set(() => ({
        priceRange: response.range,
      }))
    } catch (error) {
      console.error('Failed to fetch price histogram:', error)
    } finally {
      set({ loading: false })
    }
  },
}))

export default usePriceHistoramStore
