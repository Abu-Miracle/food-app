import { HomeIcon } from "lucide-react";
import { FaHome, FaUser, FaShoppingCart, FaCalendar } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Menu() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);

    if (item === "Your Profile") {
      navigate("/profile");
    } else if (item === "Log Out") {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userInfo");

        navigate("/");
      } else {
        setActiveItem("Dashboard");
      }
    }
  };
  return (
    <div className="bg-[#FBFBFB] w-full md:w-[30vw] lg:w-[22vw] h-[100vh]">
      <div className="flex pt-20 justify-center items-center">
        <img src="/images/logo.svg" alt="lilies-logo" className="w-14 h-16" />
        <h1 className="text-3xl font-bold text-lily-green ml-2 tracking-wider">Lilies</h1>
      </div>

      <div className="flex flex-col mt-20">
        <div
          className={`py-2 px-5 flex my-2 mx-3 rounded-lg items-center cursor-pointer ${
            activeItem === "Dashboard"
              ? "bg-gray-200 text-black/80"
              : "text-[#707070] hover:bg-gray-100"
          }`}
          onClick={() => handleItemClick("Dashboard")}
        >
          <FaHome className="mr-3" size={20} />
          Dashboard
        </div>

        <div
          className={`py-2 px-5 my-2 mx-3 rounded-lg flex items-center cursor-pointer ${
            activeItem === "Your Profile"
              ? "bg-gray-200 text-black/80"
              : "text-[#707070] hover:bg-gray-100"
          }`}
          onClick={() => handleItemClick("Your Profile")}
        >
          <FaUser className="mr-3" size={20} />
          Your Profile
        </div>

        <div
          className={`py-2 px-5 my-2 mx-3 rounded-lg flex items-center justify-between cursor-pointer ${
            activeItem === "Orders"
              ? "bg-gray-200 text-black/80"
              : "text-[#707070] hover:bg-gray-100"
          }`}
          onClick={() => handleItemClick("Orders")}
        >
          <div className="flex">
            <FaCalendar className="mr-3" size={20} />
            Orders
          </div>
          <div className="bg-green-400 w-6 h-6 text-black/70 items-center justify-center flex font-semibold text-sm rounded-full">
            9
          </div>
        </div>

        <div
          className={`py-2 px-5 my-2 mx-3 rounded-lg flex items-center justify-between cursor-pointer ${
            activeItem === "Your Cart"
              ? "bg-gray-200 text-black/80"
              : "text-[#707070] hover:bg-gray-100"
          }`}
          onClick={() => handleItemClick("Your Cart")}
        >
          <div className="flex">
            <FaShoppingCart className="mr-3" size={20} />
            Your Cart
          </div>
          <div className="bg-yellow-300 w-6 h-6 text-black/70 items-center justify-center flex font-semibold text-sm rounded-full">
            3
          </div>
        </div>

        <div
          className={`py-2 px-5 my-2 mx-3 rounded-lg flex items-center justify-between cursor-pointer ${
            activeItem === "Log Out"
              ? "bg-gray-200 text-black/80"
              : "text-[#707070] hover:bg-gray-100"
          }`}
          onClick={() => handleItemClick("Log Out")}
        >
          <div className="flex">
            <LogOut className="mr-3" size={20} />
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
}
