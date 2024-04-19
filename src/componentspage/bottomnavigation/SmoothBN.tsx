import React, { useState } from "react";
import { User ,SlidersHorizontal,Home,Bell } from "lucide-react";

const SmoothBN = () => {
    const Menus = [
        {
           name: "Home",
           icon:<Home></Home>
          
        },
        { 
          name: "Profile",
          icon:<User />

        },
        { 
          name: "Notification",
          icon:<Bell />
        },
        { 
          name: "Settings",
          icon:<SlidersHorizontal></SlidersHorizontal>
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
                        ? "duration-700 opacity-100 font-bold"
                        : "opacity-40"
                      } dark:text-white text-black`}
                  >
                    {menu.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )
};

export default SmoothBN;