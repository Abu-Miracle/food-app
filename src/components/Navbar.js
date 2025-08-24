import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="px-10 md:px-24 py-10 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-14 h-14 mr-2"
            src="/images/logo.svg"
            alt=""
            srcset=""
          />
          <p className="font-semibold text-white text-xl md:text-[26px]">
            Lilies
          </p>
        </div>

        <div className="space-x-6 lg:space-x-8 items-center flex">
          <Link
            to="/"
            className="text-[--lily-sun] text-[18px] font-medium duration-100 transition-all cursor-pointer hover:scale-105 hover:text-[--lily-light]"
          >
            Home
          </Link>
          <Link
            to="/login"
            className=" text-white text-[18px] font-medium duration-100 transition-all cursor-pointer hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[--lily-sun] text-[--lily-green] px-5 py-2 text-[18px] rounded hover:bg-[--lily-light] font-semibold duration-100 transition-all cursor-pointer hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
