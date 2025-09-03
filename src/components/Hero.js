import GooglePlayBtn from "./GooglePlayBtn";
import AppStoreBtn from "./AppStoreBtn";
import { motion } from "motion/react";

export default function Hero() {

  return (
    <div className="pl-10 py-32 md:py-20 md:px-24 flex items-center justify-between"
    >
      <motion.div className="max-w-[700px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      >
        <div className="text-4xl lg:text-6xl/tight font-medium text-white mb-9">
          Order <span className="text-[--lily-light]">food</span> anytime,
          <br /> anywhere
        </div>
        <div className="text-white/75 mr-20 text-[16px]/9 mb-7 max-w-[600px]">
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </div>
        <div className="space-x-6 flex">
          <GooglePlayBtn />
          <AppStoreBtn />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
        src="/images/hero_food.jpg"
        alt=""
        srcset=""
        className="hidden md:flex min-w-60 lg:min-w-[380px] h-60 lg:h-[380px] mr-10 rounded-full"
      />
      </motion.div>
    </div>
  );
}
