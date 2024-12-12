import React from "react";
import Image from "next/image";

interface FormFieldProps {
  id: string;
  type: "text" | "email" | "textarea";
  value: string;
  placeholder: string;
  isValid: boolean;
  onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  value,
  placeholder,
  isValid,
  onChange,
}) => {
  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-2 mt-1 border rounded-lg ${
            !isValid ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 ${
            !isValid ? "focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
      ) : (
        <input
          id={id}
          autoComplete={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-2 mt-1 border rounded-lg ${
            !isValid ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 ${
            !isValid ? "focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
      )}
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        {!isValid ? (
          <Image
            src="/icons/cross.svg"
            alt="red cross"
            width={20}
            height={20}
          />
        ) : value ? (
          <Image
            src="/icons/check.svg"
            alt="green check"
            width={20}
            height={20}
          />
        ) : null}
      </span>
    </div>
  );
};

export { FormField };
