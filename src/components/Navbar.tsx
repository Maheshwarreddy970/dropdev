"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./toggles/ThemeToggle";
import Logo from "../../public/dropdevlogo.png"
import Image from "next/image";
import { Yatra_One } from 'next/font/google'
import { Menu } from 'lucide-react';
import { Sidebar } from "./sidebar/sidebar";


const inter = Yatra_One({
    weight: '400',
    subsets: ['latin'],
})
export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {isScrolling ? (
                    <NavbarScroll isScrolling={isScrolling} />
                ) : (
                    <NavbarFixed />
                )}
            </AnimatePresence>
        </>
    );
}

function NavbarFixed() {
    return (
        <nav className="fixed z-10 flex justify-between items-center w-full sm:px-8 sm:py-2 border-b bg-black/5 border-gray-200 divide-inherit h-14 backdrop-blur-lg transition-all top-0">
            <div className="flex items-center gap-1 sm gap-1:sm:gap-3 text-black dark:text-white ">
                <Image src={Logo} alt="Logo" className='h-11 w-11'></Image>
                <p className={`${inter.className} font-bold text-inherit text-xl mt-4 hidden lg:block -ml-3`}>dropdev</p>
            </div>
            <ul className="flex items-center text-black dark:text-white lg:-ml-20">
                <div className="hidden lg:block">
                    <AnimatedTabs></AnimatedTabs>
                </div>
            </ul>
            <div className="flex items-center mr-6">
                <ThemeToggle></ThemeToggle>
                <div className=" mt-2">
                    <Sidebar>
                        <Menu></Menu>
                    </Sidebar>
                </div>
            </div>
        </nav>
    );
}

function NavbarScroll({ isScrolling }: any) {
    return (
        <motion.nav
            key={1}
            initial="initial"
            animate={isScrolling ? "animate" : "initial"}
            exit="exit"
            variants={NavAnimations}
            className="fixed w-full left-1/2 -ml-1 z-10 flex h-12 items-center justify-center sm:left-1/2 px-4 py-2 rounded-md ts-bg top-10"
        >
            <div className="fixed z-10 sm:-ml-52 flex justify-between bg-black/5 px-4 py-2 rounded-md ts-bg sm:left-1/2 border-b border-gray-200 divide-inherit  backdrop-blur-lg transition-all">
                <ul className="flex flex-col sm gap-1:sm:gap-3 h-7 ">
                    <AnimatedTabs Scrolled={true}></AnimatedTabs>
                </ul>
            </div>
        </motion.nav>
    );
}

const NavAnimations = {
    initial: {
        y: -50,
        x: "-50%",
        opacity: 0,
    },
    animate: {
        y: 0,
        x: "-50%",
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
    exit: {
        y: -50,
        opacity: 0,
    },
};




const tabs = ['Components', 'Templates', 'Services']
const Tab = ({ text, selected, setSelected }: any) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={
                selected
                    ? 'text-white dark:text-black relative rounded-md px-2 py-1 text-sm font-medium transition-colors'
                    : 'text-black dark:text-white relative rounded-md px-2 py-1 text-sm font-medium transition-colors'
            }
        >

            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    layoutId="tab"
                    transition={{ type: 'spring', duration: 0.4 }}
                    className="absolute inset-0 z-0 rounded-md bg-slate-900 dark:bg-slate-300"
                ></motion.span>
            )}
        </button>
    )
}

const AnimatedTabs = ({ Scrolled }: any) => {
    const [selected, setSelected] = useState(tabs[0])
    return (
        <div className="flex flex-wrap items-center gap-1 sm:gap-3">
            {tabs.map((tab, index) => (
                <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
            ))}

            {Scrolled ?
                <div className="flex items-center">
                    <div className="">
                    <ThemeToggle></ThemeToggle>
                    </div>
                    <Sidebar>
                        <Menu></Menu>
                    </Sidebar>
                </div>
                : <></>}

        </div>
    )
}