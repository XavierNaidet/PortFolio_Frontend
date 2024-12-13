'use client'

import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, CrossIcon } from "@/app/components/icons";

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
    <div className="relative group">
      {/* Hamburger menu for small screens */}
      <div className="sm:hidden">
        <button
          onClick={toggleDrawer}
          className="text-white "
        >
          {isDrawerOpen?
            <CrossIcon className="text-white" />
            :<MenuIcon className="text-white" />
          }
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div
        className={`absolute right-0 top-full mt-2 w-48 bg-gray-800 text-white shadow-lg z-50 rounded-md overflow-hidden transform transition-all duration-1000 ${
          isDrawerOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
          <div className="flex flex-col items-center space-y-4 my-4 px-6">
            <span className="text-lg font-bold">Menu</span>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleDrawer}
                className="hover:text-gray-300"
              >
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
    </div>
  );
};

export { NavLinks };
