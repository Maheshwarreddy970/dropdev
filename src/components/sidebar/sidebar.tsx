"use client"
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "../../../public/dropdevlogo.png"
import { Yatra_One } from 'next/font/google'
import Image from "next/image";
import Sidebaroptions from "./sidebaroptions"

const inter = Yatra_One({
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
      <Image src={Logo} alt="Logo" className='h-11 w-11'></Image>
      <p className={`${inter.className} font-bold text-inherit text-xl mt-4 hidden lg:block`}>dropdev</p>          
        </div>
        </SheetHeader>
        <Sidebaroptions></Sidebaroptions>
      </SheetContent>
    </Sheet>
  )
}
