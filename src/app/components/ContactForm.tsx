'use client'

import React from "react";
import { GenericForm } from "@/app/components";
import { FieldConfig } from "@/hooks/useForm";

const contactFields: FieldConfig[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Nom",
    validation: (value) => value.trim().length >= 3,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Message",
    validation: (value) => value.trim().length >= 10,
  },
];

const ContactForm: React.FC = () => {
  const handleSubmit = (data: Record<string, string>) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <GenericForm 
      title="Contactez-moi" 
      fields={contactFields} 
      onSubmit={handleSubmit}
    />
  );
};

export { ContactForm };
