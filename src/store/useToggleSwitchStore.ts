import { create } from 'zustand'

interface ToggleSwitchStore {
  selected: 'rent' | 'buy' | 'lystioAI'
  setSelected: (value: 'rent' | 'buy' | 'lystioAI') => void
}

export const useToggleSwitchStore = create<ToggleSwitchStore>((set) => ({
  selected: 'rent',
  setSelected: (value) => set({ selected: value }),
}))
