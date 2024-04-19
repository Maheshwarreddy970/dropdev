import React from 'react'
import Image from 'next/image'
import avatar from "@/../public/avatar.jpg"

export default function Roundedavatarred() {
  return (
    <>
    <button className="profile_item inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-red-800 border-2 hover:border-red-400/50 cursor-pointer transition-all duration-500">
        <Image src={avatar} alt="profile" className="object-cover  active:scale-95 hover:scale-95 transition-all duration-500 inline-block h-full w-full rounded-full ring-2 ring-white dark:ring-red-800" />
    </button>
</>  )
}
