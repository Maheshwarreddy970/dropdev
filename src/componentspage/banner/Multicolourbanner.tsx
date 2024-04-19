import Image from 'next/image'
import React from 'react'
import logo from '@/../public/dropdevlogo.png'

export default function Multicolourbanner() {
    return (
        <>
            <div className='px-6 py-3 mr-3 flex justify-between bg-white border border-gray-100 rounded-lg shadow-sm  dark:bg-gray-700 dark:border-gray-600 font-bold text-center text-white uppercase align-middle transition-all cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85'>
            <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
                </div>
                <div className="flex items-center flex-shrink-0">
                    <a href="#" className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
                    <button data-dismiss-target="#marketing-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close banner</span>
                    </button>
                </div>
            </div>


            


        </>
    )
}
