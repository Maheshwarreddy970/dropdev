import React from 'react'
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Backgroundcomponents({children}:any) {
    return (
        <>
            {/* <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900"> */}
                <div className="w-full rounded-lg px-3 py-11 dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute rounded-lg pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    {children}
                </div>
            {/* </BackgroundGradient> */}

        </>
    )
}
