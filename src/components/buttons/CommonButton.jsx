
import { Loader2 } from "lucide-react";
const buttonVariants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-600 text-white hover:bg-slate-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    warning: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
};

const buttonSizes = {
    small: "px-3 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base"
};


function CommonButton({
    label,
    color = "primary",
    size = "medium",
    isLoading = false,
    ...props
}) {
    const selectvariant = buttonVariants[color] || buttonVariants.primary;
    const selectsize = buttonSizes[size] || buttonSizes.medium;

    return (
        <button
            type={props.type}
            disabled={props.disabled || isLoading}
            onClick={props.onClick}
            className={`
                inline-flex items-center justify-center gap-2
                rounded-lg font-medium transition-colors
                focus:outline-none focus:ring-2 focus:ring-blue-300
                disabled:opacity-50 disabled:cursor-not-allowed
                ${selectvariant}
                ${selectsize}
                ${props.fullWidth ? "w-full" : ""}
                ${props.className}
            `}
        >
            {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
            ) : props.icon ? (
                <props.icon size={16} />
            ) : null}

            {props.children || label}
        </button>
    );
}
export default CommonButton;