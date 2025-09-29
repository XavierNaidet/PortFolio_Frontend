import React from "react";
import { useModel } from "@/hooks/useModel";
import { MediatLink, ContactForm } from "@/app/components";
import type { MediatProps } from "@/models";

const ContactPage: React.FC = () => {
  const mediats = useModel<MediatProps[]>("mediats");
  if (!mediats) return <p>Chargement des liens...</p>;

  return (
    <div className="container w-full h-auto mb-4 mx-auto flex flex-col items-center justify-between space-y-6 
      md:flex-row md:items-start md:justify-center md:space-y-0">
      {/* Formulaire de contact */}
      <ContactForm />

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center space-y-6 md:items-start md:pl-8">
        <h2 className="text-2xl font-bold text-primary">Retrouvez-moi</h2> 
        <div className="flex space-x-6 md:flex-col md:space-x-0 md:space-y-6">
          {mediats.map((link) => (
            <MediatLink
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
