import { useEffect } from "react";
import BackButton from "./BackButton";

export default function SideModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 justify-end flex bg-black/50 w-[100vw] z-50"
      onClick={onClose}
    >
      <div
        className="h-full w-full md:w-auto bg-white flex flex-col pt-7 md:pt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center ">
          <button className="block md:hidden p-2 ml-2" onClick={onClose}>
            <BackButton />
          </button>

          <h2 className="text-[16px] px-4 md:px-16 text-lily-green font-semibold">
            {title}
          </h2>

          <div className="block md:hidden w-10"></div>
        </div>

        <div className="flex-1 mt-5 md:mt-0 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
