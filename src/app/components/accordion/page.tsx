"use client"

import React from 'react'
import Carduicomponents from '@/components/carduicomponents/Carduicomponents'
import Componentsoptions from '@/components/carduicomponents/Componentsoptions'
import { AllAccordion } from '@/lib/constants/accordion'
import { AccordionList } from '@/lib/constants/accordion'

export default function Accordion() {
    return (
        <div className='w-scree flex px-3 justify-between'>
        <Componentsoptions List={AccordionList}></Componentsoptions>
        <div className='w-full flex items-center flex-col justify-center'>
            {AllAccordion.map((components:any)=>(
                <Carduicomponents>{components()}</Carduicomponents>
            ))}
            </div>
        </div>
    )
}


