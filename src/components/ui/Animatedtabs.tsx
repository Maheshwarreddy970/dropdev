import { motion } from "framer-motion";
import { useState } from "react";
import { LaptopMinimal } from "lucide-react";
import { Tablet } from "lucide-react"; 
import { Smartphone } from "lucide-react";

let tabs = [
  { id: "Laptop", 
  label: <LaptopMinimal ></LaptopMinimal> 
  },
  { 
    id: "Tabet", 
    label: <Tablet></Tablet>
  },
  {
   id: "Mobile",
   label: <Smartphone></Smartphone>
  },

];

export function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60 dark:hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-black dark:text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-white z-0 mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
