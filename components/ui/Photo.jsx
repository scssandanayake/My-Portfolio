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
        delay: 3, // 2 seconds delay 3.1
        duration: 0.5,
        //ease: "easeIn",
      },
    },
  };

  return (
    <div className="w-full h-full relative">
      {/* image */}
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <div className="w-[300px] h-[300px] xl:w-[440px] xl:h-[440px] mix-blend-lighten absolute">
          <Image
            src="/assets/photo2.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[440px] h-[300px] xl:h-[440px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
