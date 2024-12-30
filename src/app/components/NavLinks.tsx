'use client'

import React from "react";
import Link from "next/link";
import { MenuIcon, CrossIcon } from "@/app/components/icons";
import { navigationLinks } from "@/models/";
import { useNavController } from "@/controllers/useNavController";

const NavLinks: React.FC = () => {
  const { isDrawerOpen, toggleDrawer, drawerRef } = useNavController();

  return (
    <div className="relative group">
      {/* Hamburger menu for small screens */}
      <div className="sm:hidden">
        <button
          onClick={toggleDrawer}
        >
          {isDrawerOpen?
            <CrossIcon className="text-tertiary" />
            :<MenuIcon className="text-tertiary" />
          }
        </button>
      </div>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`
          absolute right-0 top-full mt-2 w-48 bg-secondaryFixed text-onSecondaryFixed shadow-lg z-50 rounded-md overflow-hidden transform transition-all duration-300
          ${isDrawerOpen 
            ? "translate-y-2 opacity-100 pointer-events-auto"
            : "translate-y-[-10px] opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center space-y-2 my-4 px-6">
          <span className="text-lg font-bold text-secondary">Menu</span>
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleDrawer}
              className="hover:bg-primaryFixedDim hover:text-onPrimaryFixedDim rounded-md p-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation links for larger screens */}
      <div className="hidden sm:flex space-x-4">
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:bg-primaryFixedDim hover:text-onPrimaryFixedDim rounded-md p-2">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export { NavLinks };
