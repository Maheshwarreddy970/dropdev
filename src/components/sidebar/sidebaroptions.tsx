"use client"

import {
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useState } from "react"
import Link from "next/link";
import { Components_List } from '@/lib/constants';


export default function Sidebaroptions() {
  const [sidebarlist, setsidebarlist] = useState(Components_List);

  return (
    <Command className="z-20">
      <CommandGroup >
        <Link href={"/components"}>
          <button className=" mt-8 px-4 w-full  py-2 rounded-md border active:bg-black active:text-white dark:active:bg-white dark:active:text-black gap-1  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            Components
          </button>
        </Link>
        <Link href={"/templates"} >
          <button className="px-4 w-full py-2 rounded-md border active:bg-black active:text-white dark:active:bg-white dark:active:text-black gap-1 mt-2 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            Templates
          </button>
        </Link>
        <Link href={"/services"}>
          <button className="px-4 w-full py-2 rounded-md border active:bg-black active:text-white dark:active:bg-white dark:active:text-black gap-1  mt-2 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            Services
          </button>
        </Link>
      </CommandGroup>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandSeparator />
        <CommandGroup heading="Settings">
          {
            sidebarlist.map((data) => (
              <Link href={`/components${data.url}`}>
                <CommandItem>
                  <span className="ml-9">{data.name}</span>
                </CommandItem>
              </Link>
            ))
          }
        </CommandGroup>
      </CommandList>
    </Command>
  )
}




const templates = [
  {
    name: "landing page",
    url: "./landing page"
  }
]