import React, { forwardRef, useState } from "react";
import { Select, SelectItem } from "@heroui/react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
  placeholder?: string;
  error?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
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

        <Select
          placeholder={placeholder}
          className={`w-full border rounded-lg appearance-none bg-transparent bg-fieldBg hover:rounded-lg
              ${error ? "border-red-500" : "border-gray-300"} ${className} ${styles.selectWrapper} selectWrapper`}
          onChange={(e) => {
            setIsSelected(!!e.target.value);
            props.onChange?.(e);
          }}
          // {...props}
        >
          {options.map((option) => (
            <SelectItem key={option}>{option}</SelectItem>
          ))}
        </Select>

        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

SelectField.displayName = "Select";
export default SelectField;
