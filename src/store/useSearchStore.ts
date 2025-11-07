import { create } from 'zustand'

import {
  SearchFilters,
  RentType,
  Category,
  Location,
  ActiveFilter,
} from '@/types'
import { RENT } from '@/constants/rentTypes'

interface SearchStore {
  filters: SearchFilters
  active: ActiveFilter
  updateFilters: (newFilters: Partial<SearchFilters>) => void
  setLocation: (location: Location | null) => void
  setDistricts: (district: string | null) => void
  setCategory: (category: Category | null) => void
  setPriceRange: (range: [number, number]) => void
  setRentType: (rentType: RentType) => void
  setActiveFilter: (active: ActiveFilter) => void
}

const useSearchStore = create<SearchStore>((set) => ({
  filters: {
    location: null,
    districts: [],
    category: null,
    priceRange: [0, 0],
    rentType: RENT,
  },
  active: null,
  updateFilters: (newFilters: Partial<SearchFilters>) =>
    set((state: SearchStore) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  setLocation: (location: Location | null) =>
    set((state: SearchStore) => ({ filters: { ...state.filters, location } })),
  setDistricts: (district: string | null) =>
    set((state: SearchStore) => {
      if (district) {
        const { districts } = state.filters
        return {
          filters: {
            ...state.filters,
            districts: districts.includes(district)
              ? districts.filter((id) => id !== district)
              : [...districts, district],
          },
        }
      }
      return { filters: { ...state.filters, districts: [] } }
    }),
  setCategory: (category: Category | null) =>
    set((state: SearchStore) => ({ filters: { ...state.filters, category } })),
  setPriceRange: (range: [number, number]) =>
    set((state: SearchStore) => ({
      filters: { ...state.filters, priceRange: range },
    })),
  setRentType: (rentType: RentType) =>
    set((state: SearchStore) => ({ filters: { ...state.filters, rentType } })),
  setActiveFilter: (active: ActiveFilter) => set({ active }),
}))

export default useSearchStore
