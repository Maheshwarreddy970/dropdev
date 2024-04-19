"use client"

import React from 'react'
import Carduicomponents from '@/components/carduicomponents/Carduicomponents'
import Componentsoptions from '@/components/carduicomponents/Componentsoptions'
import { AvatarList } from '@/lib/constants/avatarconstants'
import Avatarrender from '@/components/carduicomponents/Avatarrender'

export default function Button() {
    return (
        <div className='w-screen flex px-3 mt-1/2 sm:justify-around mt-32'>
        <Componentsoptions List={AvatarList}></Componentsoptions>
            <Carduicomponents><Avatarrender></Avatarrender></Carduicomponents>
            
        </div>
    )
}


