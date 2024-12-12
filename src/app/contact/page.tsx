'use client';

import React, { useState } from "react";
import { SocialMediaLink, FormContact } from "@/app/components";
import { socialMediaLinks } from "@/models";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "name":
        return value.trim().length >= 3;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "message":
        return value.trim().length >= 10;
      default:
        return false;
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: !validateField(field, value) });
  };

  return (
    <div className="container w-full h-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:justify-center space-y-6 md:space-y-0">
      {/* Formulaire de contact */}
      <FormContact />

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center md:items-start space-y-6 md:pl-8">
        {/* N'hésitez pas à me contacter, je suis à votre disposition pour plus d'informations. */}
        <h2 className="text-2xl font-bold">Suivez-moi</h2> 
        <div className="flex flex-col space-y-6">
          {socialMediaLinks.map((link) => (
            <SocialMediaLink
              key={link.name}
              name={link.name}
              href={link.href}
              icon={link.icon}
              colorClass={link.colorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
