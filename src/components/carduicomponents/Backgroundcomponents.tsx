import React from 'react'
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Backgroundcomponents({chileren}:any) {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
                <div className="w-full rounded-[22px] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none rounded inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="z-10 py-7">
                        {chileren}
                    </div>
                </div>
            </BackgroundGradient>
        </div>
    )
}
