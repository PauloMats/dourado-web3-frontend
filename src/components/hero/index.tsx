"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex justify-between items-center px-44 py-0 w-full max-w-[1920px] max-md:px-20 max-sm:px-10 max-sm:flex-col max-sm:gap-10">
      <div className="text-white">
        <h1 className="text-9xl font-bold leading-[104px] max-md:text-8xl max-sm:text-6xl">
          Tecnologias
        </h1>
        <h2 className="text-5xl font-medium leading-[104px] max-md:text-4xl max-sm:text-2xl">
          para o universo
        </h2>
        <h2 className="text-8xl font-bold text-yellow-400 leading-[104px] max-md:text-7xl max-sm:text-5xl">
          da Web3
        </h2>
        <p className="mt-5 text-xl text-yellow-400 max-md:text-lg max-sm:text-base">
          Reinventando transações financeiras com blockchain privada e soluções
          descentralizadas
        </p>
        <button className="mt-5 focus:outline-none" aria-label="Scroll down">
          
        </button>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d27f0d15bd72ca37d09b30a5c2f0d5deb52770?placeholderIfAbsent=true"
        className="h-[722px] w-[1283px] max-md:h-auto max-md:w-[800px] max-sm:h-auto max-sm:w-[600px]"
        alt="Smartphone"
      />
    </section>
  );
};

export default HeroSection;