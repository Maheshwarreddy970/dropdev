import Link from "next/link"
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

export default function Componentsoptions({ List }: any) {
  return (
    <Command className="sm:block hidden h-auto w-1/6 rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandGroup heading="ON THIS PAGE">
          {List.map((name: any, index: any) => (
            <CommandItem className="px-4 w-full py-2 rounded-md border active:bg-black active:text-white dark:active:bg-white dark:active:text-black mt-1 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md ">
              <Link href={`#${name}`} className="">
                {name}
              </Link>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
