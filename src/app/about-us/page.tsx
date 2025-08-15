'use client';

import React from 'react';
import TechnologyHeroSection from '@/components/TechnologyHeroSection';
import DevelopmentSection from '@/components/DevelopmentSection';
import InfoBlock from '@/components/InfoBlock';
import TeamCarousel from '@/components/TeamCarousel';
import MetricsSection from '@/components/MetricsSection';
import ContactSection from '@/components/ContactSection';
import { metricsData } from '@/components/MetricsSection/metricsData';



const pageData = {
  // 1. Dados para a primeira seção (Hero)
  hero: {
    infoBlock: {
      preTitle: "Content - Desktop",
      mainTitle: "Ajudamos você a projetar, desenvolver e lançar uma marca web3 confiável e atrair investidores.",
      subtitle: "Se você tem um projeto web3, está com o custo de nossos serviços de design, desenvolvimento e marketing.",
      button: { text: "Conhecer agora", href: "/servicos" }
    },
    image: { src: "/img/dourado-about-hero.png", alt: "Dourado Exchange App" }
  },

  // 2. Dados para a seção "Branding & Design"
  branding: {
    infoBlock: {
      preTitle: "PLANEJAMENTO",
      mainTitle: "Branding & Design",
      subtitle: "Trabalhamos com você para criar uma identidade de marca forte e memorável que ressoe com seu público-alvo. Desde o design do logotipo até a criação de materiais de marketing, garantimos que sua marca tenha uma presença online profissional e memorável.",
      button: { text: "Learn More", href: "/branding" }
    },
    images: [
      { src: '/img/Negocios1.png', alt: 'Imagem de Branding 1' },
    ]
  },

  // 3. Dados para a seção "Desenvolvimento"
  development: {
    infoBlock: {
      preTitle: "CONSTRUÇÃO",
      mainTitle: "Desenvolvimento",
      subtitle: "Nossa equipe tem as habilidades e o conhecimento necessários para dar vida ao seu projeto web3, seja ele um aplicativo descentralizado (DApp), uma plataforma de contrato inteligente ou algo totalmente diferente.",
      button: { text: "Learn More", href: "/desenvolvimento" }
    },
    images: [
      { src: '/img/desenvolvimento1.jpg', alt: 'Imagem de Desenvolvimento 1' },
    ]
  },

  // 4. Dados para a seção "Nosso Time"
  team: {
    infoBlock: {
      preTitle: "NOSSO TIME",
      mainTitle: "Os cérebros por trás das operações",
      subtitle: "Na Dourado Cash, temos orgulho de ter uma equipe talentosa e diversificada de profissionais dedicados a ajudar os fundadores da web3 a terem sucesso.",
      button: { text: "Saiba mais", href: "/equipe" }
    }
  },

  // 5. Dados para a seção de Contato
  contact: {
    title: "Entre em contato",
    infoBlock: {
      preTitle: "Contact Form - Text",
      mainTitle: "PRONTO PARA LEVAR SEU PROJETO PARA O PRÓXIMO NÍVEL?",
      subtitle: "Contate-nos hoje para discutir seu projeto e saber mais sobre como podemos ajudá-lo a projetar, desenvolver e lançar uma marca web3 confiável.",
    }
  }
};


const AboutUsPage: React.FC = () => {
  return (
    <main>
      {/* 1. Hero Section: InfoBlock na esquerda, Imagem na direita */}
      <TechnologyHeroSection
        cardData={{
          title: pageData.hero.infoBlock.mainTitle,
          text: pageData.hero.infoBlock.subtitle,
          buttonText: pageData.hero.infoBlock.button.text,
        }}
        imageData={pageData.hero.image}
        withBackground 
        imagePosition="right" 
      />

      {/* 2. Branding & Design Section: Imagens na esquerda, InfoBlock na direita */}
      <DevelopmentSection
        infoBlockData={pageData.branding.infoBlock}
        images={pageData.branding.images}
      />
      
      {/* 3. Development Section: Imagens na esquerda, InfoBlock na direita */}
      <DevelopmentSection
        infoBlockData={pageData.development.infoBlock}
        images={pageData.development.images}
      />

      {/* 4. Team Section: InfoBlock na esquerda, Carrossel na direita */}
      <section className="w-full bg-black text-white py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <InfoBlock {...pageData.team.infoBlock} />
          <TeamCarousel />
        </div>
      </section>

      {/* 5. Metrics Section */}
      <MetricsSection data={metricsData} />

      {/* 6. Contact Section */}
      <ContactSection
        title={pageData.contact.title}
        infoBlockData={pageData.contact.infoBlock}
      />
    </main>
  );
};

export default AboutUsPage;
