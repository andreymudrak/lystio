'use client'

import TOGGLE_OPTIONS, { ToggleKey } from './assets'
import { cn } from '@/utils/classNames'
import { useToggleSwitchStore } from '@/store/useToggleSwitchStore'

export const ToggleSwitch = () => {
  const { selected, setSelected } = useToggleSwitchStore()

  const getSliderPosition = () => {
    switch (selected) {
      case 'rent':
        return 'translate-x-0 w-[60px]'
      case 'buy':
        return 'translate-x-[63px] w-[54px]'
      case 'lystioAI':
        return 'translate-x-[120px] w-[88px]'
      default:
        return 'translate-x-0 w-[60px]'
    }
  }

  return (
    <div className="relative h-[42px] w-[218px] bg-main-hover border border-black-10 rounded-full flex items-center justify-between px-1">
      <div
        className={cn(
          'absolute h-8 bg-white rounded-full transition-transform duration-300 ease-in-out shadow-[0px_7px_29.9px_0px_#0000001A]',
          getSliderPosition()
        )}
      />

      {TOGGLE_OPTIONS.map((opt) => (
        <button
          key={opt.key}
          onClick={() => setSelected(opt.key as ToggleKey)}
          className={cn(
            'relative z-10 h-8 flex items-center justify-center font-medium transition-colors duration-300 text-base',
            opt.className
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
