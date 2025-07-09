"use client";
import React from "react";
import DropdownIcon from "../DropdownIcon/DropdownIcon";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-9 py-0 w-full h-[77px] max-w-[1920px] max-sm:px-5 max-sm:py-0">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7eb16a079edb24c4e3a1b55606437b3c9a127e2?placeholderIfAbsent=true"
        className="h-[34px] w-[335px]"
        alt="Logo Dourado Cash DC"
      />

      <nav className="flex gap-14 items-center max-md:gap-12 max-sm:hidden">
        <div className="flex gap-2 items-center text-base font-medium text-zinc-50 text-opacity-90">
          <span>Tecnologias</span>
          <DropdownIcon />
        </div>

        <div className="flex gap-2 items-center text-base font-medium text-zinc-50 text-opacity-90">
          <span>Mercado BDM</span>
          <DropdownIcon />
        </div>

        <div className="gap-2 text-base font-medium text-zinc-50 text-opacity-90">
          Clientes e Empresas
        </div>

        <div className="flex gap-2 items-center text-base font-medium text-zinc-50 text-opacity-90">
          <span>Sobre Nós</span>
          <DropdownIcon />
        </div>
      </nav>

      <div className="flex gap-2.5 items-center max-sm:hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eab48fb02cb89d3c7a1d74752f195b78810301b?placeholderIfAbsent=true"
          className="rounded-full h-[30px] w-[30px]"
          alt="Brazil Flag"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f09447ce68c4f3b558f1d6ab08c6b742ae2c2b6?placeholderIfAbsent=true"
          className="rounded-full h-[30px] w-[30px]"
          alt="English Flag"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6101540a464548bcd5e00ee703f4ba429fd1e3af?placeholderIfAbsent=true"
          className="rounded-full h-[30px] w-[30px]"
          alt="Spanish Flag"
        />
      </div>

      <div className="flex gap-6 items-center max-sm:hidden">
        <button className="text-base font-medium text-zinc-50 text-opacity-90">
          Login
        </button>
        <button className="px-8 py-4 text-lg font-bold rounded text-zinc-900 bg-yellow-400 hover:bg-yellow-500 transition-colors">
          Registro
        </button>
      </div>
    </header>
  );
};

export default Header;