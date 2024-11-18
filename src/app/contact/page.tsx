'use client';

import React, { useState } from "react";
import { SocialMediaLink, FormField } from "@/app/components";
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
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
      {/* Formulaire de contact */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
        <form action="#" method="POST">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nom
            </label>
            <FormField
              type="text"
              placeholder="Nom"
              value={formData.name}
              isValid={!errors.name}
              onChange={(value) => handleChange("name", value)}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <FormField
              type="email"
              placeholder="Email"
              value={formData.email}
              isValid={!errors.email}
              onChange={(value) => handleChange("email", value)}
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <FormField
              type="textarea"
              placeholder="Message"
              value={formData.message}
              isValid={!errors.message}
              onChange={(value) => handleChange("message", value)}
            />
          </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={
            errors.name || errors.email || errors.message || 
            !formData.name || !formData.email || !formData.message
          }
        >
          Envoyer
        </button>
        </form>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center md:items-start space-y-6">
        {/* N'hésitez pas à me contacter, je suis à votre disposition pour plus d'informations. */}
        <h2 className="text-2xl font-bold">Suivez-moi</h2> 
        <div className="flex space-x-6">
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
