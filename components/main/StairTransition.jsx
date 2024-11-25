"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen W-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
