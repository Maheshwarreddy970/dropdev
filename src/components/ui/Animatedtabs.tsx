import { motion } from "framer-motion";




export function AnimatedTabs({activeTab,setActiveTab,tabs}:any) {

  return (
    <div className="flex gap-2">
      {tabs.map((tab:any) => (
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
