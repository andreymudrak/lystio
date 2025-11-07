'use client'

import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

import CloseIcon from '@/assets/icons/CloseIcon'
import { cn } from '@/utils/classNames'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  title: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return ReactDOM.createPortal(
    <div
      className={cn(
        'fixed bottom-0 left-0 w-screen z-[999] bg-white pt-2 transition-all duration-500 overflow-hidden flex flex-col',
        isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
      )}
    >
      <div className="py-3 px-14 relative">
        <p className="font-semibold text-lg text-center">{title}</p>
        <button
          onClick={onClose}
          className="bg-black/5 rounded-full size-[34px] flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="pb-3 pt-1 flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>,
    document.getElementById('body') as Element
  )
}

export default Modal
