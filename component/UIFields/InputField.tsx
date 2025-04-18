import React, { forwardRef } from "react";
import { Input } from "@heroui/react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

interface InputPropsList extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputPropsList>(
  ({ label, error, className, onChange, value, type, placeholder }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1 text-sm font-medium">{label}</label>
        )}
        <Input
          ref={ref}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          className={`w-full bg-fieldBg border rounded-[12px] focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className} ${styles.inputWrapper}`}
          // value={value !== undefined ? String(value) : ""}
          type={type}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "Input";
export default InputField;
