import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import { meals } from "../meals";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function truncateText(text, maxLength = 45) {
      if (!text) return '';
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  return (
    <div className="flex h-screen">
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="bg-[#FBFBFB] border-none" size={24} />
        ) : (
          <AlignJustify size={24} className="bg-white" />
        )}
      </button>

      <div
        className={`
        fixed md:relative z-40 w-[50vw] md:w-[30vw] lg:w-[22vw] h-full
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300
      `}
      >
        <Menu />
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="flex-1 overflow-y-auto">
        <div className="mt-28 px-8 lg:px-16 flex justify-between">
          <div className="">
            <h1 className="font-semibold text-[22px] text-lily-green">
              Good Morning, Oluwafemi!
            </h1>
            <p className="text-sm text-black/70">
              What delicious meal are you craving today?
            </p>
          </div>
          <Link to="/profile">
            <img src="/images/pfp.svg" alt="pfp" />
          </Link>
        </div>

        <div className="flex justify-center px-8 lg:px-16 mt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl w-full justify-items-center">
            {meals.map((meal, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={meal.image}
                  alt="food-item"
                  className="w-36 h-36 rounded-full object-cover"
                />
                <h1 className="text-lily-green font-semibold text-xl my-3">
                  {meal.name}
                </h1>
                <p className="text-black/70 text-[12px] w-44  text-center">
                  {truncateText(meal.description)}
                </p>

                <div className="text-sm font-semibold mt-6 flex justify-between w-full">
                  <p className="text-lily-green">N{(meal.price).toLocaleString()}.00</p>
                  <p className="text-[#1c9e5d]">Add to Cart</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
