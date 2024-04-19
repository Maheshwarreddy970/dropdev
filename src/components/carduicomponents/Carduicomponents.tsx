"use client"

import React from 'react'
import { Code, LaptopMinimal } from "lucide-react";
import { AnimatedTabs } from "@/components/ui/Animatedtabs";
import { Eye } from "lucide-react";
import { useState } from 'react';
import Backgroundcomponents from './Backgroundcomponents';
import { Tablet } from "lucide-react";
import { Smartphone } from "lucide-react";
import { twMerge } from 'tailwind-merge';


export default function Carduicomponents({ children }: any) {
    let tabs = [
        {
            id: "Laptop",
            label: <LaptopMinimal ></LaptopMinimal>
        },
        {
            id: "Tabet",
            label: <Tablet></Tablet>
        },
        {
            id: "Mobile",
            label: <Smartphone></Smartphone>
        },
    ];
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (

            <div className="w-full mt-16 sm:w-8/12 pb-2 px-4 py-5 bg-gray-100 bg-opacity-5  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full flex justify-around">
                    <div className='hidden sm:block'>
                        <button className=" sm:flex h-9  animate-shimmer items-center justify-center rounded-md border dark:border-slate-800 bg:white/70 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 gap-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                            <Eye></Eye>
                            Preview
                        </button>
                    </div>
                    <div className="w-40 mb-5 bg-black/20 rounded-full ">
                        <AnimatedTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}></AnimatedTabs>
                    </div>
                    <div>
                        <button className="inline-flex h-9  animate-shimmer items-center justify-center rounded-md border dark:border-slate-800 bg:balck/20 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 gap-2  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                            <Code></Code>
                            Code
                        </button>
                    </div>
                </div>
                <div className={twMerge(activeTab === "Laptop" && "w-full ", activeTab === "Mobile" && " lg:px-36", activeTab === "Tabet" && "lg:px-28")}>
                    <Backgroundcomponents>{children}</Backgroundcomponents>
                </div>

            </div>

    )
}
