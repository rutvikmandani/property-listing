import React, { forwardRef } from "react";
import { Textarea } from "@heroui/react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, value, placeholder }, ref) => {
    return (
      <div className="w-full m-0">
        {label && (
          <label className="block mb-1 text-sm font-medium">{label}</label>
        )}
        <Textarea
          ref={ref}
          placeholder={placeholder}
          className={`w-full bg-fieldBg border rounded-[12px] focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className} ${styles.textareaWrapper}`}
          // value={value}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

TextareaField.displayName = "Textarea";
export default TextareaField;
