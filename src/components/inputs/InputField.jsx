import React, { useState } from "react";
function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onClear,
  icon,
  helperText,
  required = false,
  disabled = false,
  error,
  className = ""
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  const hasValue = value !== undefined && value !== null && String(value).length > 0;

  return (
    <div className={`w-full space-y-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="flex items-center justify-between text-sm font-medium text-slate-700"        >
          <span>
            {label}
            {required && <span className="ml-1 text-rose-500">*</span>}
          </span>
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 flex items-center text-slate-400">
            {icon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full rounded-xl border bg-white py-2.5 text-sm text-slate-900
            shadow-xs outline-none transition-all duration-200
            placeholder:text-slate-400
            focus:ring-4
            disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400
            ${icon ? "pl-10" : "pl-3.5"}
            ${isPassword || onClear ? "pr-11" : "pr-3.5"}
            ${error
              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/15"
              : "border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/15"
            }
          `} />
        {onClear && hasValue && !disabled && !isPassword && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear input"
            className="absolute right-3 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            ✕
          </button>
        )}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 rounded-md px-1.5 py-0.5 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}

      </div>
      {error ? (
        <p className="flex items-center gap-1 text-xs font-medium text-rose-600">
          <span>!</span> {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
}
export default InputField;