import GooglePlayBtn from "./GooglePlayBtn";
import AppStoreBtn from "./AppStoreBtn";

export default function Hero() {
  return (
    <div className="pl-10 py-32 md:py-20 md:px-24 flex items-center justify-between">
      <div className="max-w-[700px]">
        <div className="text-4xl lg:text-6xl/tight font-medium text-white mb-9">
          Order <span className="text-[--lily-light]">food</span> anytime,
          <br /> anywhere
        </div>
        <div className="text-white/75 mr-20 text-[16px]/9 mb-7 max-w-[600px]">
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </div>
        <div className="space-x-6 flex">
          <GooglePlayBtn />
          <AppStoreBtn />
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
