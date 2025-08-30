import { X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 w-[100vw] flex justify-center items-center"
      onClick={onClose}
    >
      <div className="relative bg-white rounded-xl max-w-md w-full mx-16 md:mx-0">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
