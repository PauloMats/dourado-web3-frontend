"use client";

import Image from "next/image";
import { SectionWrapper } from "./styles";
import SimpleCarousel from "../Carousel/SimpleCarousel";

const TecnologiaDouradoSection = () => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Tecnologia Exclusiva Dourado Cash
        </h1>

        {/* Conteúdo Principal (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Coluna da Esquerda: Texto */}
          <div className="text-white">
            <h2 className="text-3xl font-semibold text-yellow-400">
              Blockchain Privada:
            </h2>
            <h3 className="text-2xl font-light mt-1 mb-6">
              A Base Revolucionária do BDM Digital
            </h3>
            <p className="text-base text-gray-200 leading-relaxed">
              Desde 1999, quando a <span className="font-bold">Dakila Pesquisas</span> idealizou o BDM, até
              hoje, evoluímos para uma era onde a tecnologia blockchain
              redefine o futuro das transações.
            </p>
            <p className="text-base text-gray-200 leading-relaxed mt-4">
              Desenvolvemos uma <span className="font-bold">blockchain privada e criptografada</span>, fruto da parceria
              estratégica entre a <span className="font-bold">Dourado Cash</span> e a <span className="font-bold">Dakila Pesquisas</span>,
              projetada para garantir segurança, velocidade e autonomia total
              aos usuários. Não dependemos de redes públicas: aqui, <span className="font-bold">o controle é seu</span>.
            </p>
          </div>

          {/* Coluna da Direita: Imagem */}
          <div className="flex justify-center items-center">
            <Image
              src="/img/blockchain-network.png"
              alt="Rede Blockchain Dourado Cash"
              width={500}
              height={500}
              quality={100}
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>

        {/* Seção do Carrossel */}
        <div className="mt-16">
            <h4 className="text-sm font-light text-gray-300 mb-4 ml-6">Soluções Dourado Cash</h4>
            <SimpleCarousel />
        </div>

      </div>
    </SectionWrapper>
  );
};

export default TecnologiaDouradoSection;