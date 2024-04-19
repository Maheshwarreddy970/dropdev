"use client"

import React from 'react'
import Carduicomponents from '@/components/carduicomponents/Carduicomponents'
import Componentsoptions from '@/components/carduicomponents/Componentsoptions'
import { bottomavigationLIist } from '@/lib/constants/bottomnavigationconstant'
import { AllBottomnavigation } from '@/lib/constants/bottomnavigationconstant'
export default function Accordion() {
    return (
        <div className='w-scree flex px-3 justify-between'>
        <Componentsoptions List={bottomavigationLIist}></Componentsoptions>
        <div className='w-full flex items-center flex-col justify-center'>
            {AllBottomnavigation.map((components:any)=>(
                <Carduicomponents>{components()}</Carduicomponents>
            ))}
            </div>
        </div>
    )
}


