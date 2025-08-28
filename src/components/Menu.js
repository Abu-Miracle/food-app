import { FaHome, FaUser, FaShoppingCart, FaCalendar } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import Modal from "./Modal";
import SideModal from "./SideModal";
import { meals } from "../meals";

export default function Menu() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsLogoutModalOpen(true);
  };

  const closeModal = () => {
    setIsLogoutModalOpen(false);
    setModalContent({});
  };

  const openOrdersModal = () => {
    setIsOrdersModalOpen(true);
  };

  const closeOrdersModal = () => {
    setIsOrdersModalOpen(false);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);

    if (item === "Your Profile") {
      navigate("/profile");
    } else if (item === "Log Out") {
      openModal({
        title: "Confirm Logout",
        type: "logout",
      });
    } else if (item === "Orders") {
      openOrdersModal();
    } else if (item === "Your Cart") {
      openCartModal();
    }
  };

  let total = 0;
  meals.slice(0, 4).forEach((meal) => {
    total += meal.price * meal.quantity;
  });

  return (
    <div className="bg-[#FBFBFB] w-full md:w-[30vw] lg:w-[22vw] h-[100vh]">
      <div className="flex pt-20 justify-center items-center">
        <img src="/images/logo.svg" alt="lilies-logo" className="w-14 h-16" />
        <h1 className="text-3xl font-bold text-lily-green ml-2 tracking-wider">
          Lilies
        </h1>
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
            4
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

      <Modal
        isOpen={isLogoutModalOpen}
        onClose={closeModal}
        title={modalContent.title}
      >
        {modalContent.type === "logout" && (
          <div className="px-2">
            <p className="pt-2 py-5">Are you sure you want to Logout?</p>

            <div className="flex justify-between ">
              <button
                className="rounded border-[1px] border-black/50 px-4 py-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-lily-green text-lily-light rounded px-4 py-2"
                onClick={() => {
                  localStorage.removeItem("authToken");
                  navigate("/");
                  closeModal();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </Modal>

      <SideModal
        isOpen={isOrdersModalOpen}
        onClose={closeOrdersModal}
        title="Your Orders"
      >
        <div className="px-16">
          <div className="hidden md:grid grid-cols-10 gap-8 text-sm py-8 items-center">
            <div className="col-span-5 ">Items</div>
            <div className="col-span-1 text-center">Qty</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Status</div>
          </div>

          {meals.slice(0, 4).map((meal, index) => (
            <div key={index}>
              <div className="hidden md:grid grid-cols-10 gap-8 items-center py-4">
                <div className="col-span-5 flex items-center">
                  <img
                    src={meal.image}
                    alt="meal-image"
                    className="w-16 h-16 rounded-full object-cover mr-3 object-center flex-shrink-0"
                  />
                  <div>
                    <h1 className="text-lily-green font-[500] text-lg">
                      {meal.name}
                    </h1>
                    <p className="text-xs text-red-600">Remove</p>
                  </div>
                </div>
                <div className="col-span-1 text-center font-bold text-lily-green">
                  {meal.quantity}
                </div>
                <div className="col-span-2 text-center font-bold text-lily-green tracking-wide">
                  N{meal.price.toLocaleString()}.00
                </div>
                <div
                  className={`col-span-2 text-center font-medium tracking-wide ${meal.status === "delivered" ? "text-green-600" : "text-red-500"}`}
                >
                  {meal.status === "delivered" ? "Delivered" : "Cooking"}
                </div>
              </div>

              <div className="block md:hidden bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-3">
                  <img
                    src={meal.image}
                    className="w-16 h-16 rounded-full object-cover mr-3 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h1 className="text-lily-green font-[500] text-lg">
                      {meal.name}
                    </h1>
                    <p className="text-xs text-red-600">Remove</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-500 mb-1">Qty</span>
                    <span className="font-bold text-lily-green">
                      {meal.quantity}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500 mb-1">Price</span>
                    <span className="font-bold text-lily-green">
                      N{meal.price.toLocaleString()}.00
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500 mb-1">Status</span>
                    <span
                      className={`font-medium ${meal.status === "delivered" ? "text-green-600" : "text-red-500"}`}
                    >
                      {meal.status === "delivered" ? "Delivered" : "Cooking"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SideModal>

      <SideModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        title="Your Cart"
      >
        <div className="px-4 md:px-16">
          <div className="hidden md:grid grid-cols-10 gap-8 text-sm py-8 items-center">
            <div className="col-span-5 pl-2">Items</div>
            <div className="col-span-1 text-center">Qty</div>
            <div className="col-span-2 text-center">Unit Price</div>
            <div className="col-span-2 text-center">Sub-total</div>
          </div>

          {meals.slice(0, 4).map((meal, index) => (
            <div key={index} className="mb-8 md:mb-4">
              <div className="block md:hidden">
                <div className="flex items-center mb-3">
                  <img
                    src={meal.image}
                    className="w-16 h-16 rounded-full object-cover mr-3 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h1 className="text-lily-green font-[500] text-lg">
                      {meal.name}
                    </h1>
                    <p className="text-xs text-red-600">Remove</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-500 mb-1">Qty</span>
                    <span className="font-bold text-lily-green">
                      {meal.quantity}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500 mb-1">Price</span>
                    <span className="font-bold text-lily-green">
                      N{meal.price.toLocaleString()}.00
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500 mb-1">Sub-total</span>
                    <span className="font-bold text-lily-green">
                      N{(meal.quantity * meal.price).toLocaleString()}.00
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid grid-cols-10 gap-8 items-center py-4">
                <div className="col-span-5 flex items-center">
                  <img
                    src={meal.image}
                    alt="meal-image"
                    className="w-16 h-16 rounded-full object-cover mr-3 object-center flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lily-green font-[500] text-lg">
                      {meal.name}
                    </h1>
                    <p className="text-xs text-red-600">Remove</p>
                  </div>
                </div>
                <div className="col-span-1 text-center font-bold text-lily-green">
                  {meal.quantity}
                </div>
                <div className="col-span-2 text-center font-bold text-lily-green tracking-wide">
                  N{meal.price.toLocaleString()}.00
                </div>
                <div className="col-span-2 text-center font-bold text-lily-green tracking-wide">
                  N{(meal.quantity * meal.price).toLocaleString()}.00
                </div>
              </div>
            </div>
          ))}

          <div className="flex space-x-7 mr-8 md:-mr-4 justify-end">
            <h1 className="text-black/70 text-lg font-semibold tracking-tight">
              Total:
            </h1>
            <h1 className="text-xl text-lily-green font-bold">
              N{total.toLocaleString()}.00
            </h1>
          </div>
          <button className="bg-lily-green font-semibold rounded text-lily-light block mx-auto py-4 text-sm w-[80%] mt-10 mb-16">
            Checkout
          </button>
        </div>
      </SideModal>
    </div>
  );
}
