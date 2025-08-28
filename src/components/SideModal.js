// SideModal.js
import { useEffect } from "react";

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
      className="fixed inset-0 justify-end flex bg-black/50 w-[100vw]"
      onClick={onClose}
    >
      <div
        className="h-full w-full md:w-[60vw] lg:w-[50vw] bg-white flex flex-col pt-7 md:pt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center ">
          <button className="block md:hidden p-2 ml-2" onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-lily-green"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
