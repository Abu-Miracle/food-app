export default function Hero() {
  return (
    <div className="pl-10 py-32 md:py-20 md:px-20 flex items-center justify-between">
      <div className="max-w-[700px]">
        <div className="text-3xl lg:text-6xl/tight font-medium text-white mb-9">
          Order <span className="text-[--lily-light]">food</span> anytime,
          <br /> anywhere
        </div>
        <div className="text-white/75 mr-20 text-lg/7 mb-7">
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </div>
        <div className="space-x-6">
          <button href="">
            <img src="/images/google-play.svg" alt="" srcset="" />
          </button>
          <button href="">
            <img src="/images/app-store.svg" alt="" srcset="" />
          </button>
        </div>
      </div>

      <img
        src="/images/hero_food.jpg"
        alt=""
        srcset=""
        className="hidden md:flex min-w-60 lg:min-w-[380px] h-60 lg:h-[380px] mr-10 rounded-full"
      />
    </div>
  );
}
