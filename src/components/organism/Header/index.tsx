"use client";
import React, { FC, useState } from "react";
import LocaleSwitcher from "@/components/molecules/LocaleSwitcher";
import { IHeaderProps } from "./interface";

const Header: FC<IHeaderProps> = ({ title, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Título à esquerda com degrade */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
          {title}
        </div>
        {/* Direita: navbar + select */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-4">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2 py-2 rounded-md font-medium text-black hover:bg-blue-600 hover:text-blue-100 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="bg-white text-blue-700 rounded-md px-3 py-1 shadow-md">
            <LocaleSwitcher />
          </div>
        </div>
        {/* Botão mobile */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 px-4 py-2 flex flex-col gap-2 animate-slide-down">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-2 px-2 rounded hover:bg-blue-600 transition text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 bg-white text-blue-700 rounded-md px-3 py-1 shadow-md">
            <LocaleSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;