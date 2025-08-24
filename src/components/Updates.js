export default function Updates() {
  return (
    <div className="lg:flex pt-24 md:pt-44 pb-40 justify-center lg:justify-between items-center px-10 md:px-24">
      <div className="mr-20  md:max-w-[550px]">
        <h1 className="text-[--lily-light] font-bold text-3xl md:text-[34px] my-6">
          Get notified when we update!
        </h1>
        <p className="text-white/95 md:text-[17px]/8">
          Get notified when we add new items to our specials menu, update our
          price list of have promos!
        </p>
      </div>

      <div className="md:flex mt-5">
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
      </div>
    </div>
  );
}
