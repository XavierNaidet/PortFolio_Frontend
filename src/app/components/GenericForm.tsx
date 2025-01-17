'use client';

import React from "react";
import { FormField } from "@/app/components";
import { useForm, FieldConfig } from "@/hooks/useForm";

interface FormProps {
  title: string;
  fields: FieldConfig[];
  onSubmit: (data: Record<string, string>) => void;
}

const GenericForm: React.FC<FormProps> = ({ title, fields, onSubmit }) => {
  const { formData, errors, handleChange, isValidForm } = useForm(fields);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isValidForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-secondaryContainer text-onSecondaryContainer rounded-md shadow-md p-6 w-full lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4 text-primary text-center md:text-left">
        {title}
      </h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block text-secondary font-medium">
              {field.placeholder}
            </label>
            <FormField
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              isValid={!errors[field.name]}
              onChange={(value) => handleChange(field.name, value)}
            />
          </div>
        ))}
        <button
          type="submit"
          className={`w-full py-2 rounded-md transition font-bold
            ${ isValidForm()
              ? "bg-primaryFixedDim text-onPrimaryFixedVariant hover:text-onPrimary hover:bg-primary"
              : "bg-surfaceDim text-secondary cursor-not-allowed"
            }`}
          disabled={!isValidForm()}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export { GenericForm };