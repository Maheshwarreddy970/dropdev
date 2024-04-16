import React from 'react'

export function ArrowButton() {
  return (

      <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium bg-gradient-to-r from-amber-500 to-pink-500 transition duration-300 ease-out border-2  rounded-lg shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full 'bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 group-hover:translate-x-0 ease">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide w-11 h-11 text-white lucide-move-right "><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
        <span className="relative invisible">Button Text</span>
      </button>
  )
}
