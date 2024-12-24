import React from "react";
import { MediaLink, ContactForm } from "@/app/components";
import { mediaLinks } from "@/models";

const ContactPage: React.FC = () => {
  return (
    <div className="container bg-neutral text-primary p-6 rounded-md w-full h-auto mb-4 mx-auto flex flex-col items-center justify-between  space-y-6 
      md:flex-row md:items-start md:justify-center md:space-y-0">
      {/* Formulaire de contact */}
      <ContactForm />

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center md:items-start space-y-6 md:pl-8">
        <h2 className="text-2xl font-bold">Retrouvez-moi</h2> 
        <div className="flex md:flex-col space-x-6 md:space-x-0 md:space-y-6">
          {mediaLinks.map((link) => (
            <MediaLink
              key={link.name}
              name={link.name}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
