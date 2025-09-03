import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function SpecialMeals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const special_meals = [
    {
      name: "Stir fry Pasta",
      description: "Stir fry pasta yada yada yada because of Sesan",
      image: "/images/smeal1.jpg",
    },
    {
      name: "Meat Balls",
      description: "Stir fry pasta yada yada yada because of Sesan",
      image: "/images/smeal2.jpg",
    },
    {
      name: "Burger Meal",
      description: "Stir fry pasta yada yada yada because of Sesan",
      image: "/images/smeal3.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center text-center items-center py-10 px-10 md:px-24">
      <motion.div className="max-w-[500px] md:max-w-[700px] mb-14"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      >
        <h1 className="text-white/85 text-2xl md:text-[34px] mb-5 md:mb-10 font-bold">
          Special Meals of the Day!
        </h1>
        <p className="text-white/80 text-sm md:text-lg/7 mb-7">
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-14 md:gap-24 mb-10"
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
        {special_meals.map((meal, index) => (
          <motion.div
            key={index}
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
            className="flex flex-col md:justify-center md:items-center"
          >
            <img
              src={meal.image}
              alt={meal.name}
              className="w-[80vw] lg:w-[270px] h-80 lg:h-[270px] rounded-xl lg:rounded-full object-cover"
            />
            <h1 className="text-[--lily-light] font-black text-xl md:font-bold md:text-[24px] mt-3 mb-1 md:mb-5 md:mt-5 text-left lg:text-center">
              {meal.name}
            </h1>
            <p className="text-white/75 md:text-[17px]/7 text-left lg:text-center">
              {meal.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
