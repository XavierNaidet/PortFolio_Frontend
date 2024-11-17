import React from "react";
import SocialMediaLink from "@/app/components/SocialMediaLink";

import { socialMediaLinks } from "@/models";

export default function ContactPage() {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
      {/* Formulaire de contact */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center md:items-start space-y-6">
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
}
