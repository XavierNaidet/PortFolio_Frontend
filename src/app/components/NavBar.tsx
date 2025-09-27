import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/app/components";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed z-20 w-full bg-primary text-onPrimary px-6 py-1 flex h-28 rounded-b-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/wolfLogo.png"
              alt="Logo"
              width={600}
              height={700}
              className="cursor-pointer h-24 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <NavLinks />
      </div>
    </nav>
  );
};

export { NavBar };