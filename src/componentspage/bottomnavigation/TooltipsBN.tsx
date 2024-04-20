import React, { useState } from "react";
import { User, SlidersHorizontal, Home, Bell } from "lucide-react";

const TooltipsBn = () => {
    const Menus = [
        {
            name: "Home",
            icon: <Home></Home>

        },
        {
            name: "Profile",
            icon: <User />

        },
        {
            name: "Notification",
            icon: <Bell />
        },
        {
            name: "Settings",
            icon: <SlidersHorizontal></SlidersHorizontal>
        }
    ];

    const [active, setActive] = useState(0);


    return (
        <div className="bg-white h-11 dark:bg-black">
            <ul className="flex h-full relative">
                {Menus.map((menu, i) => (
                    <li key={i} className="w-20 flex items-center">
                        <a
                            className="flex flex-col text-center p-5 cursor-pointer px-4"
                            onClick={() => setActive(i)}
                        >
                            <span
                                className={` ${active === i
                                    ? " duration-700 opacity-100 font-bold ring-2 ring-pink-300 ring-inset rounded-[50%] "
                                    : " rounded-md "
                                    }dark:text-white text-black hover:ring-2 hover:ring-pink-300 hover:ring-inset group flex justify-center p-2 drop-shadow-xl font-semibold hover:rounded-[50%] transition-all duration-500 "
                `}>
                                {menu.icon}
                                <span
                                    className=" pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    {menu.name}
                                </span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TooltipsBn