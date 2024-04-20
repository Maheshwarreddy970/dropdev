import React from 'react'

export default function Lighteffectbutton() {
    return (
        <button className="inline-flex h-12 items-center justify-center rounded-md px-6   relative font-medium py-4 transition duration-200 ease-in-out border-none shadow-md bg-white text-black hover:translate-y-0.5 hover:shadow-lg active:translate-y-0.25 active:shadow-md">
        Button
        <span className="absolute inset-0 rounded-md bg-white transform scale-150 opacity-0 transition-all duration-400"></span>
      </button>
  
    )
}
