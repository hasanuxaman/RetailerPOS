
import { X } from "lucide-react";

function CommonModal({
    isOpen,
    onClose,
    title,
    children,
    size = "max-w-lg"
}) {
    if (!isOpen) {
        return null;
    }
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onMouseDown={onClose}>
        <div
            className={`w-full ${size} bg-white rounded-xl shadow-xl`}
            onMouseDown={event => event.stopPropagation()}
        ></div>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">

            <h2 className="text-lg font-bold text-slate-800">
                {title}
            </h2>

            <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
            >
                <X size={20} />
            </button>

        </div>

        <div className="p-6">
            {children}
        </div>
    </div>

}
export default CommonModal;