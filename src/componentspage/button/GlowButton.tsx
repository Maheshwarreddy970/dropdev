import React from 'react'

export default function GlowButton() {
  return (
    <>
      <div className="relative inline-flex h-12 group">
        <div
          className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-amber-500 to-pink-500 rounded-md blur group-hover:opacity-100 group-hover:-inset group-hover:duration-200 animate-tilt">
        </div>
        <a href="#" title="Get quote now"
          className="relative inline-flex items-center justify-center px-8 py-4 transition-all duration-200 bg-gray-900 text-white  rounded-xl active:bg-gradient-to-r from-amber-500 to-pink-500"
          role="button">Button
        </a>
      </div>
    </>
  )
}
