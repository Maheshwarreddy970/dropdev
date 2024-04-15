"use client"
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "../../../public/dropdevlogo.png"
import { Philosopher } from 'next/font/google'
import Image from "next/image";
import Sidebaroptions from "./sidebaroptions"

const inter = Philosopher({
    weight: '400',
    subsets: ['latin'],
})


interface Props {
  children: JSX.Element
}



export function Sidebar({ children}:Props) {
  return (
    <Sheet >
      <SheetTrigger className="z-20 bg-black" asChild>
      <Button className="bg-transprant hover:bg-transparent text-black dark:text-white p-0 m-0 h-auto">{children}</Button>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
        <div className="flex flex-row">
      <Image src={Logo} alt="Logo" className='h-7 mt-1 w-7'></Image>
      <p className={`${inter.className} text-inherit text-3xl`}>DropDev</p>          
        </div>
        </SheetHeader>
        <Sidebaroptions></Sidebaroptions>
      </SheetContent>
    </Sheet>
  )
}
