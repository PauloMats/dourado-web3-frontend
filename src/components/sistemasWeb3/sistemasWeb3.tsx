import React from 'react';
import Image from 'next/image'; 
import { SectionTitle, FullWidthImageContainer, TextContainer, Button } from './style'; 


const SistemasParaWeb3: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4 sm:px-8 lg:px-16">
      {/* Seção Principal - Título */}
      <div className="w-full max-w-7xl mb-12">
        <SectionTitle>Sistemas para <span className="text-yellow-400">web3</span></SectionTitle>
      </div>

      {/* Seção de Imagens Superiores */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="flex justify-center items-center rounded-lg overflow-hidden bg-gray-800">
          <Image
            src="/img/image_app_tela_verde.png" 
            alt="Aplicativo em tela verde"
            width={700} 
            height={400} 
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center rounded-lg overflow-hidden bg-purple-900">
          <Image
            src="/img/image_app_tela_roxa.png" 
            alt="Aplicativo em tela roxa"
            width={700} 
            height={400} 
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Seção Inferior - Dourado Exchange e BDM Digital POS */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="flex justify-center items-center rounded-lg overflow-hidden bg-yellow-600 p-4">
          <Image
            src="/img/image_dourado_exchange.png" 
            alt="Dourado Exchange"
            width={600}
            height={400}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center rounded-lg overflow-hidden bg-gray-800 p-4">
          <Image
            src="/img/image_bdmdigital_pos.png" 
            alt="BDM Digital POS"
            width={600}
            height={400}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Seção "Veja todas as tecnologias Dourado" */}
      <div className="w-full max-w-7xl bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between mb-16">
        <TextContainer className="md:w-3/4">
          <h2 className="text-3xl font-bold mb-4">Veja todas as tecnologias Dourado</h2>
          <Button>Ver mais</Button>
        </TextContainer>
        <div className="md:w-1/4 flex justify-center items-center mt-8 md:mt-0">
          {/* Este pode ser um ícone ou uma imagem pequena que represente a blockchain */}
          <Image
            src="/img/blockchain_icon.png" 
            alt="Ícone Blockchain"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>

      {/* Seção "Blockchain Própria" (se for uma seção separada ou uma imagem grande) */}
      <div className="w-full max-w-7xl bg-gray-800 rounded-lg p-8 flex justify-center items-center">
        <FullWidthImageContainer>
          <Image
            src="/img/blockchain_propria_diagrama.png" 
            alt="Blockchain Própria Diagrama"
            width={1000} 
            height={600} 
            layout="responsive"
            objectFit="contain"
          />
        </FullWidthImageContainer>
      </div>
    </div>
  );
};

export default SistemasParaWeb3;