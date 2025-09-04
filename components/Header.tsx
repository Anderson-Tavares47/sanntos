"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "@/assets/img/logo santos.png";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/portfolio", label: "Portfólio" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="bg-dark text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Sanntos Logo"
            width={160}
            height={160}
            priority
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex space-x-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative pb-2 transition ${
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-dark text-white px-6 py-4 space-y-4">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block transition ${
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
