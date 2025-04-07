import React, { forwardRef } from "react";
import { Input } from "@heroui/react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1 text-sm font-medium">{label}</label>
        )}
        <Input
          ref={ref}
          type="text"
          placeholder="Enter your name"
          // onChange={(e) => props.onChange("name", e.target.value)}
          className={`w-full bg-fieldBg border rounded-lg focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className} ${styles.inputWrapper}`}
          // {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "Input";
export default InputField;
