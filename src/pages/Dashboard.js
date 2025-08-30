import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import { meals } from "../meals";
import SideModal from "../components/SideModal";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState({});
  const [value, setValue] = useState(0);

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedMeal(null);
  };

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  function truncateText(text, maxLength = 45) {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  function truncateName(text, maxLength = 14) {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  return (
    <div className="flex h-screen">
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {!isMenuOpen && <AlignJustify size={24} className="bg-white" />}
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

        <div className="flex justify-center px-10 lg:px-16 mt-20 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl w-full justify-items-center">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer py-4 px-4 items-center"
              >
                <img
                  src={meal.image}
                  alt="food-item"
                  className="w-36 h-36 rounded-full object-cover"
                />
                <h1 className="text-lily-green font-semibold text-xl my-3">
                  {truncateName(meal.name)}
                </h1>
                <p className="text-black/70 text-[12px] w-44  text-center">
                  {truncateText(meal.description)}
                </p>

                <div className="text-sm font-semibold mt-6 flex justify-between w-full">
                  <p className="text-lily-green">
                    N{meal.price.toLocaleString()}.00
                  </p>
                  <p
                    className="text-[#1c9e5d] hover:text-lily-green hover:scale-105"
                    onClick={() => {
                      setSelectedMeal(meal);
                      setIsDetailModalOpen(true);
                    }}
                  >
                    Add to Cart
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SideModal isOpen={isDetailModalOpen} onClose={closeDetailModal} title="">
        {selectedMeal && (
          <div>
            <div className="flex md:hidden justify-center items-center w-full flex-col px-14 pb-16">
              <img
                src={selectedMeal.image}
                alt="meal-image"
                className="w-60 h-60 mt-10 rounded-full object-cover flex-shrink-0"
              />
              <h1 className="text-lily-green font-semibold text-lg my-7">
                {selectedMeal.name}
              </h1>
              <p className="text-black/70 text-[12px]/6 text-center">
                {selectedMeal.description}
              </p>

              <div className="flex items-center justify-between w-full my-10 text-lily-green font-semibold text-lg">
                <p className="text-nowrap">
                  NGN {selectedMeal.price?.toLocaleString()}.00
                </p>
                <p className="">10-20 MIns</p>
                <p className="">10 Pcs Avail</p>
              </div>

              <div className="flex justify-between w-full">
                <div className="flex">
                  <button
                    className="bg-lily-sun w-12 h-16 text-lily-green text-2xl font-bold"
                    onClick={() => decrement()}
                  >
                    -
                  </button>
                  <div className="bg-black/10 w-12 h-16 text-lily-green text-2xl text-center flex justify-center items-center font-semibold">
                    {value}
                  </div>
                  <button
                    className="bg-lily-sun w-12 h-16 text-lily-green text-2xl font-bold"
                    onClick={() => increment()}
                  >
                    +
                  </button>
                </div>

                <div>
                  <button className="bg-lily-green px-8 h-16 text-white text-[13px] font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center w-[50vw] lg:w-[36vw] flex-col px-14 pb-16">
              <img
                src={selectedMeal.image}
                alt="meal-image"
                className="w-60 h-60 mt-10 rounded-full object-cover flex-shrink-0"
              />
              <h1 className="text-lily-green font-semibold text-lg my-7">
                {selectedMeal.name}
              </h1>
              <p className="text-black/70 text-[12px]/6 text-center">
                {selectedMeal.description}
              </p>

              <div className="xl:flex items-center justify-between w-full my-10 text-lily-green font-semibold text-lg">
                <p className="text-nowrap">
                  NGN {selectedMeal.price?.toLocaleString()}.00
                </p>
                <p className="">10-20 MIns</p>
                <p className="">10 Pcs Avail</p>
              </div>

              <div className="xl:flex justify-between w-full">
                <div className="flex mb-7 lg:mb-7 xl:mb-0">
                  <button
                    className="bg-lily-sun w-12 h-16 text-lily-green text-2xl font-bold"
                    onClick={() => decrement()}
                  >
                    -
                  </button>
                  <div className="bg-black/10 w-12 h-16 text-lily-green text-2xl text-center flex justify-center items-center font-semibold">
                    {value}
                  </div>
                  <button
                    className="bg-lily-sun w-12 h-16 text-lily-green text-2xl font-bold"
                    onClick={() => increment()}
                  >
                    +
                  </button>
                </div>

                <div>
                  <button className="bg-lily-green w-36 h-16 text-white text-[13px] font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </SideModal>
    </div>
  );
}
