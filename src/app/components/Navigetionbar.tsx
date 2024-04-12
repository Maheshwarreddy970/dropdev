import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "../../../public/dropdevlogo.png"
import Image from "next/image";
import { Yatra_One } from 'next/font/google'
import { ThemeToggle } from "./toggles/ThemeToggle";


const inter = Yatra_One({
    weight: '400',
    subsets: ['latin'],
})

export default function NavtionBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Components",
        "Templates",
        "Services",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <div className="sm:hidden w-full flex items-center justify-between">
                <div className="flex">
                    <Image src={Logo} alt="Logo" className='h-11 w-11 '></Image>
                    {isMenuOpen ? <p className={`${inter.className} font-bold text-inherit text-xl mt-3`}>dropdev</p> : <></>}
                </div>
                <div>
                    <ThemeToggle></ThemeToggle>
                </div>
            </div>

            <NavbarContent className="hidden sm:flex gap-4 justify-between">
                <NavbarBrand>
                    <Image src={Logo} alt="Logo" className='h-11 w-11'></Image>
                    <p className={`${inter.className} font-bold text-inherit text-2xl mt-3`}>dropdev</p>
                </NavbarBrand>
                <NavbarItem >
                    <Link color="foreground" className="font-medium hover:text-blue-700" href="#">
                        Components
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link color="foreground" className="font-medium hover:text-blue-700" href="#">
                        Templates
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className="font-medium hover:text-blue-700" href="#">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem><ThemeToggle></ThemeToggle></NavbarItem>
            </NavbarContent>
            <NavbarMenu className="">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <button className="w-full py-2 px-6 h-12 gap-1 text-sm hover:-translate-y-1 transform transition duration-100 hover:shadow-md ">
                            <Link
                                className="w-full"
                                color={
                                    "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </button>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}