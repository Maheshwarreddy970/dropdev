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



export default function Sidebaroptions() {
  const [sidebarlist, setsidebarlist] = useState(componentsList);

  return (
    <Command className="z-20">
      <CommandGroup >
        <button className=" mt-8 px-4 w-full  py-2 rounded-md border active:bg-black active:text-white dark:active:bg-white dark:active:text-black gap-1  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Components
        </button>
        <button className="px-4 w-full py-2 rounded-md border active:bg-black active:text-white dark:active:bg-white dark:active:text-black gap-1 mt-2 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Templates
        </button>
        <button className="px-4 w-full py-2 rounded-md border active:bg-black active:text-white dark:active:bg-white dark:active:text-black gap-1  mt-2 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Services
        </button>
      </CommandGroup>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandSeparator />
        <CommandGroup heading="Settings">
          {
            sidebarlist.map((data) => (
              <CommandItem>
                <Link href={data.url}>
                <span className="ml-9">{data.name}</span>
                </Link>
              </CommandItem>
            ))
          }
        </CommandGroup>
      </CommandList>
    </Command>
  )
}


const componentsList = [
  {
    name: "Button",
    url: "/button"
  },
  {
    name: "Card",
    url: "/Card"
  },
  {
    name: "Price",
    url: "/price"
  },
  {
    name: "Navigetion",
    url: "/navbar"
  },
  {
    name: "Avatar",
    url: "/avatar"
  },
]

const templates = [
  {
    name: "landing page",
    url: "./landing page"
  }
]