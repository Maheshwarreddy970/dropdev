import React from 'react'
import Components from "@/components/Components";
import Image from "next/image";
import { Code, LaptopMinimal } from "lucide-react";
import { AnimatedTabs } from "@/components/ui/Animatedtabs";
import { Eye } from "lucide-react";
import Backgroundcomponents from './Backgroundcomponents';
import Componentsoptions from './Componentsoptions';

export default function Carduicomponents() {
    return (
        <div>
            <div className="flex px-3 mt-1/2 sm:justify-around mt-32">
                <Componentsoptions ></Componentsoptions>
                <div className="w-full sm:w-8/12 pb-2 px-4 py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-full flex justify-around">
                        <div className='hidden sm:block'>
                            <button className=" sm:flex h-9  animate-shimmer items-center justify-center rounded-md border dark:border-slate-800 bg:white/70 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 gap-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                                <Eye></Eye>
                                Preview
                            </button>
                        </div>
                        <div className="w-40 mb-5 bg-black/20 rounded-full ">
                            <AnimatedTabs ></AnimatedTabs>
                        </div>
                        <div>
                            <button className="inline-flex h-9  animate-shimmer items-center justify-center rounded-md border dark:border-slate-800 bg:white/70 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 gap-2  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                                <Code></Code>
                                Code
                            </button>
                        </div>
                    </div>
                    <Backgroundcomponents></Backgroundcomponents>
                </div>
            </div>
        </div>
    )
}
