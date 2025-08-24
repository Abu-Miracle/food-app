import GooglePlayBtn from "./GooglePlayBtn";
import AppStoreBtn from "./AppStoreBtn";

export default function Footer() {
  return (
    <div className="bg-[#0B0D17] text-sm font-light text-[#EEEFF4]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 py-14 px-10 md:px-28">
        <div className="flex flex-col">
          <h1 className="text-[16px] font-medium mb-5">Company</h1>
          <a href="/" className="mb-3 hover:text-white">
            About Us
          </a>
          <a href="/" className="mb-3 hover:text-white">
            Careers
          </a>
          <a href="/" className="mb-3 hover:text-white">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[16px] font-medium mb-5">Support</h1>
          <a href="/" className="mb-3 hover:text-white">
            Help Center
          </a>
          <a href="/" className="mb-3 hover:text-white">
            Safety Center
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[16px] font-medium mb-5">Legal</h1>
          <a href="/" className="mb-3 hover:text-white">
            Cookies Policy
          </a>
          <a href="/" className="mb-3 hover:text-white">
            Privacy Policy
          </a>
          <a href="/" className="mb-3 hover:text-white">
            Terms of Service
          </a>
          <a href="/" className="mb-3 hover:text-white">
            Dispute Resolution
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[16px] font-medium mb-5">Install App</h1>
          <GooglePlayBtn className="mb-3 hover:text-white" />
          <AppStoreBtn />
        </div>
      </div>

      <div className="w-[100] border-b border-[#EEEFF4]/20"></div>

      <div className="px-10 md:px-28 flex justify-between py-10">
        <div> © {new Date().getFullYear()} LILIES, All rights reserved</div>
        <div className="flex space-x-2">
          <a href="/">
            <img src="/images/IG.svg" alt="" />
          </a>
          <a href="/">
            <img src="/images/X.svg" alt="" />
          </a>
          <a href="/">
            <img src="/images/YT.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
