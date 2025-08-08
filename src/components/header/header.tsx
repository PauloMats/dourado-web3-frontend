'use client';
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownIcon from "../DropdownIcon/DropdownIcon";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur-md">
      {/* NAVBAR PRINCIPAL */}
      <div className="flex justify-between items-center px-6 py-3 max-w-[1920px] mx-auto h-[77px]">
        {/* Logo */}
            <Link href="/">
              <Image
                src="/img/dourado-cash-logo.png"
                alt="Logo Dourado Cash"
                width={500}
                height={100}
                className="h-[20px] w-auto cursor-pointer"
                priority
              />
            </Link>

        {/* Menu desktop */}
        <nav className="hidden lg:flex gap-14 items-center">
          {/* Dropdown de Produtos */}
           <Link href="/tecnologias" className="text-base font-medium text-white hover:text-yellow-400">Tecnologias</Link>
          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex gap-2 text-base font-medium text-white cursor-pointer items-center"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
            >
              <span>Produtos</span>
              <div className={`transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`}>
                <DropdownIcon />
              </div>
            </div>
             
            {desktopDropdownOpen && (
              <div className="absolute top-full mt-4 w-48 border border-gray-700 rounded-md shadow-lg py-2">
                <Link href="/mercadobdm" className="block px-4 py-2 text-sm text-white hover:bg-gray-800" onClick={() => setDesktopDropdownOpen(false)}>Mercado BDM</Link>
                <Link href="/bdmpos" className="block px-4 py-2 text-sm text-white hover:bg-gray-800" onClick={() => setDesktopDropdownOpen(false)}>BDM POS</Link>
                <Link href="/bdmpay" className="block px-4 py-2 text-sm text-white hover:bg-gray-800" onClick={() => setDesktopDropdownOpen(false)}>BDM PAY</Link>
                <Link href="/bdmdigital" className="block px-4 py-2 text-sm text-white hover:bg-gray-800" onClick={() => setDesktopDropdownOpen(false)}>BDM DIGITAL</Link>
              </div>
            )}
          </div>
          <Link href="/" className="text-base font-medium text-white hover:text-yellow-400">Cliente e Empresas</Link>
          <Link href="/" className="text-base font-medium text-white hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Sobre Nós</Link>
        </nav>

        {/* Ações - Desktop */}
        <div className="hidden lg:flex gap-6 items-center">
          <button className="px-6 py-3 text-lg font-bold rounded bg-yellow-400 text-black hover:bg-yellow-500">
            Entre em Contato
          </button>
        </div>

        {/* Botão menu mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center h-8 w-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6 mb-1.5'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-5 mt-1.5'}`} />
        </button>
      </div>

      {/* Dropdown menu mobile */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-6 space-y-4">
          <nav className="flex flex-col gap-2 text-white">
            <div 
              className="flex justify-between items-center py-2 cursor-pointer"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <span>Produtos</span>
              <div className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}>
                <DropdownIcon />
              </div>
            </div>
            {mobileDropdownOpen && (
               <div className="flex flex-col pl-4 border-l-2 border-gray-700">
                  <Link href="/mercadobdm" className="py-2" onClick={handleMobileLinkClick}>Mercado BDM</Link>
                  <Link href="/bdmpos" className="py-2" onClick={handleMobileLinkClick}>BDM POS</Link>
                  <Link href="/bdmpay" className="py-2" onClick={handleMobileLinkClick}>BDM PAY</Link>
                  <Link href="/bdmdigital" className="py-2" onClick={handleMobileLinkClick}>BDM DIGITAL</Link>
               </div>
            )}
            <Link href="/tecnologias" className="py-2 border-t border-gray-700 mt-2" onClick={() => setMenuOpen(false)}>Tecnologias</Link>
            <Link href="/contato" className="py-2" onClick={() => setMenuOpen(false)}>Contato</Link>
            <Link href="/" className="py-2" onClick={() => setMenuOpen(false)}>Clientes e Empresas</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
