'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "@/app/components/icons";

const NavLinks: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const links = [
    { href: "/", label: "<Présentation>" },
    { href: "/skills", label: "<Compétences>" },
    { href: "/projects", label: "<Projets>" },
    { href: "/contact", label: "<Contact>" },
  ];

  return (
    <>
      {/* Hamburger menu for small screens */}
      <div className="sm:hidden">
        <button
          onClick={toggleDrawer}
          className="text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <MenuIcon className="text-white" />
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed top-0 right-0 w-3/4 h-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-lg font-bold">Menu</span>
            <button
              onClick={toggleDrawer}
              className="text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <Image
                src="/icons/cross.svg"
                alt="Close"
                width={24}
                height={24}
                className="h-8 w-8"
              />
            </button>
          </div>
          <div className="flex flex-col items-end space-y-4 px-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-300">
              {link.label}
            </Link>
          ))}
          </div>
        </div>
      )}

      {/* Navigation links for larger screens */}
      <div className="hidden sm:flex space-x-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-gray-300">
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export { NavLinks };
