import { useState } from "react";

export interface FieldConfig {
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  validation: (value: string) => boolean;
}

export const useForm = (fields: FieldConfig[]) => {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map((field) => [field.name, ""]))
  );
  const [errors, setErrors] = useState(
    Object.fromEntries(fields.map((field) => [field.name, false]))
  );

  const validateField = (field: string, value: string) => {
    const fieldConfig = fields.find((f) => f.name === field);
    return fieldConfig?.validation(value) ?? false;
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: !validateField(field, value) });
  };

  const isValidForm = () =>
    Object.values(errors).every((error) => !error) &&
    Object.values(formData).every((value) => value.trim() !== "");

  return { formData, errors, handleChange, isValidForm };
};
