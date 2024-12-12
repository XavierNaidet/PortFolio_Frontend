import React from "react";
import { SocialMediaLink, ContactForm } from "@/app/components";
import { socialMediaLinks } from "@/models";

const ContactPage: React.FC = () => {
  return (
    <div className="container w-full h-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:justify-center space-y-6 md:space-y-0">
      {/* Formulaire de contact */}
      <ContactForm />

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center md:items-start space-y-6 md:pl-8">
        <h2 className="text-2xl font-bold">Suivez-moi</h2> 
        <div className="flex md:flex-col space-x-6 md:space-x-0 md:space-y-6">
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
