import React, { forwardRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
  placeholder?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      placeholder = "Select an option",
      error,
      className,
      ...props
    },
    ref
  ) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <div className="w-full relative">
        {label && (
          <label className="block mb-1 text-sm font-medium">{label}</label>
        )}

        <div className="relative">
          <select
            ref={ref}
            className={`w-full p-2 border rounded-lg appearance-none bg-transparent focus:ring-2 focus:ring-blue-500 
              ${error ? "border-red-500" : "border-gray-300"} ${className}`}
            onChange={(e) => {
              setIsSelected(!!e.target.value);
              props.onChange?.(e);
            }}
            {...props}
          >
            <option value="" hidden disabled selected={!isSelected}>
              {placeholder}
            </option>

            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {/* Dropdown arrow icon */}
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none">
            <IoIosArrowDown />
          </span>
        </div>

        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
