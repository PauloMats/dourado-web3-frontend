import React from 'react';
import Image from 'next/image'; 
import { SectionTitle } from './style'; 

const SistemasParaWeb3: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4 sm:px-8 lg:px-16">
      {/* Seção Principal - Título */}
      <div className="w-full max-w-7xl mb-12">
        <SectionTitle>Sistemas para <span className="text-yellow-400">web3</span></SectionTitle>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
  {/* Coluna Esquerda */}
  <div className="grid grid-rows-3 gap-4">
    <div className="row-span-1 h-[400px] bg-gray-800 overflow-hidden relative">
      <Image
        src="/img/sistemas-web3-img-esquerda-cima.png"
        alt="Tela Verde"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
    <div className="row-span-1 h-[400px] bg-purple-900 overflow-hidden relative">
      <Image
        src="/img/sistemas-web3-img-esquerda-centro.png"
        alt="Tela Roxa"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
   <div className="row-span-1 h-[100px] w-[106%] overflow-hidden relative">
      <Image
        src="/img/sistemas-web3-img-esquerda-baixo.png"
        alt="Exchange"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  </div>

  {/* Coluna Direita */}
  <div className="grid grid-rows-2 gap-4">
    <div className="row-span-1 h-[600px] bg-gray-900 overflow-hidden relative">
      <Image
        src="/img/sistemas-web3-img-direita-cima.png"
        alt="POS"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
    <div className="row-span-1 h-[310px] bg-gray-800  overflow-hidden relative">
      <Image
        src="/img/sistemas-web3-img-direita-baixo.png"
        alt="Blockchain"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default SistemasParaWeb3;