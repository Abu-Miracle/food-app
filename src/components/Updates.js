import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Updates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <motion.div className="lg:flex pt-24 md:pt-44 pb-40 justify-center lg:justify-between items-center px-10 md:px-24"
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
          duration: 1,
          ease: "easeInOut",
        }
      }
    }}
    >
      <motion.div className="mr-20  md:max-w-[550px]"
      variants={{
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1, 
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        } 
      }
    }}
      >
        <h1 className="text-[--lily-light] font-bold text-3xl md:text-[34px] my-6">
          Get notified when we update!
        </h1>
        <p className="text-white/95 md:text-[17px]/8">
          Get notified when we add new items to our specials menu, update our
          price list of have promos!
        </p>
      </motion.div>

      <motion.div className="md:flex mt-5"
      variants={{
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1, 
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        } 
      }
    }}
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="gregphillips@gmail.com"
          className="px-4 py-2 md:py-4 rounded-md text-[15px] mr-2 border-none outline-none w-[270px] bg-[#F7F7F7] text-gray-700 mb-5"
        />

        <button className="px-5 md:px-10 py-2 md:py-4 bg-[--lily-light] text-[--lily-green] md:text-lg font-semibold rounded-md text-nowrap mb-5">
          Get notified
        </button>
      </motion.div>
    </motion.div>
  );
}
