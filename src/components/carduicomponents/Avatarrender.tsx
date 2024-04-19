import React from 'react'
import { AllAvatar } from '@/lib/constants/avatarconstants'
export default function Avatarrender() {
    return (
        <div className='w-full grid grid-cols-3'>
            {AllAvatar.map((Component, index) => (
                <div key={index} className="relative m-8 flex w-56 h-20 justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {Component()}
                </div>
            ))}
        </div>
    )
}
