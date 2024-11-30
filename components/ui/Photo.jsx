"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 3.1, // 2 seconds delay
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <div className="w-[298px] h-[298px] xl:w-[430px] xl:h-[430px]">
          <Image
            src="/assets/photo2.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;