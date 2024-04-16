"use client"

import React from 'react'
import Carduicomponents from '@/components/carduicomponents/Carduicomponents'
import Componentsoptions from '@/components/carduicomponents/Componentsoptions'
import { ButtonsList } from '@/lib/constants/buttonconstants'
import Buttonrender from '@/components/carduicomponents/Buttonrender'


export default function Button() {
    return (
        <div className='w-screen flex px-3 mt-1/2 sm:justify-around mt-32'>
        <Componentsoptions ButtonsList={ButtonsList}></Componentsoptions>
            <Carduicomponents><Buttonrender></Buttonrender></Carduicomponents>
            
        </div>
    )
}


