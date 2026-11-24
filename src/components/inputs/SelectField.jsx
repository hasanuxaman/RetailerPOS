

function SelectField({
    label,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    icon,
    helperText,
    error,
    required = false,
    disabled = false,
    className = "",
}) {
    return (
        <div className={`w-full space-y-1.5 ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="flex items-center justify-between text-sm font-medium text-slate-700"
                >
                    {label}
                    {required && <span className="ml-1 text-rose-500">*</span>}
                </label>

            )}
            <div className="relative flex items-center">
                {icon && (
                    <span className="pointer-events-none absolute left-3.5 flex items-center text-slate-400">
                        {icon}
                    </span>
                )}

                <select
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className={`
            w-full appearance-none rounded-xl border bg-white py-2.5 pr-10 text-sm text-slate-900
            shadow-xs outline-none transition-all duration-200
            focus:ring-4
            disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400
            ${icon ? "pl-10" : "pl-3.5"}
            ${error
                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/15"
                            : "border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/15"
                        }
          `}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}

                    {options.map((opt) => {
                        const optionValue = typeof opt === "object" ? opt.value : opt;
                        const optionLabel = typeof opt === "object" ? opt.label : opt;

                        return (
                            <option key={optionValue} value={optionValue}>
                                {optionLabel}
                            </option>
                        );
                    })}
                </select>
                <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-3.5 text-slate-400"
                />
            </div>
            {error ? (
                <p className="text-xs font-medium text-rose-600">{error}</p>
            ) : helperText ? (
                <p className="text-xs text-slate-500">{helperText}</p>
            ) : null}

        </div>
    );
}
export default SelectField;