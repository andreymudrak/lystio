import { create } from 'zustand'

import { PropertiesData } from '@/types'
import { RENT } from '@/constants/rentTypes'

interface PropertiesStore {
  data: PropertiesData
  setData: (data: PropertiesData) => void
}

const usePropertiesStore = create<PropertiesStore>((set) => ({
  data: {
    rentType: RENT,
    location: null,
    category: null,
    count: 0,
  },
  setData: (newData: PropertiesData) => {
    set((state: PropertiesStore) => ({ data: { ...state.data, ...newData } }))
  },
}))

export default usePropertiesStore
