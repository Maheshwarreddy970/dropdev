import React, { useState } from "react";
import { User, SlidersHorizontal, Home, Bell } from "lucide-react";

export default function BottomGlowBN() {
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
    <div className="bg-white dark:bg-black h-11">
      <ul className="flex h-full relative">
        {Menus.map((menu, i) => (
          <li key={i} className="w-20 flex items-center">
            <a
              className="flex flex-col text-center p-5 cursor-pointer px-4"
              onClick={() => setActive(i)}
            >
              <span
                className={` ${active === i
                    ? " duration-700 opacity-100 font-bold  brightness-110 -translate-y-[1px] border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] shadow-xl shadow-green-300 active:shadow-none"
                    : "opacity-40"
                  }transition-all 
                  dark:text-white text-black
                  bg-white dark:bg-black px-6 py-2 rounded-lg
                  border-green-400
                  hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none`}
              >
                {menu.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
