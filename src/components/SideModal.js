import { useEffect } from "react";
import { X } from "lucide-react";

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
      <div className="h-full bg-white flex flex-col py-16">
        <div className="flex justify-between items-center ">
          <h2 className="text-[16px] px-16 text-lily-green font-semibold">{title}</h2>
        </div>

        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
