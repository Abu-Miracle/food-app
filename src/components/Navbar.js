export default function Navbar() {
  return (
    <div>
      <div className="px-10 md:px-20 py-10 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 mr-2"
            src="/images/logo.svg"
            alt=""
            srcset=""
          />
          <p className="font-semibold text-white text-xl md:text-2xl">Lilies</p>
        </div>

        <div className="space-x-6 lg:space-x-8 items-center flex">
          <button
            href="/"
            className="text-[--lily-sun] text-sm font-medium duration-100 transition-all cursor-pointer hover:scale-105 hover:text-[--lily-light]"
          >
            Home
          </button>
          <button
            href=""
            className=" text-white text-sm font-medium duration-100 transition-all cursor-pointer hover:scale-105"
          >
            Login
          </button>
          <button
            href=""
            className="bg-[--lily-sun] text-[--lily-green] px-5 py-2 text-sm rounded hover:bg-[--lily-light] font-semibold duration-100 transition-all cursor-pointer hover:scale-105"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
