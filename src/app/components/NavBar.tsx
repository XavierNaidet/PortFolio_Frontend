import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MonPortfolio</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Présentation
          </Link>
          <Link href="/skills" className="hover:text-gray-300">
            Compétences
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;