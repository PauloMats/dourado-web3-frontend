import TechnologyHeroSection from "@/components/TechnologyHeroSection";
import TransformativeTechSection from "@/components/TransformativeTechSection";
import MarketplaceFeatureSection from "@/components/MarketplaceFeatureSection";

// Dados da página que virão do CMS
const technologyPageData = {
  heroSection: {
    cardData: {
      title: "Criar seu negócio na <span>Web3</span> ficou fácil",
      text: "Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor amet feugiat ullamcorper in.",
      buttonText: "Ver Tecnologias"
    },
    imageData: { src: "/img/Technology-page-1.png", alt: "Plataforma Dourado Cash" }
  },
  transformativeTech: {
      title: "Tecnologia que Transforma o <span>Futuro Financeiro</span>",
      text: "Na Dourado Cash, não seguimos tendências: criamos o futuro. Nossa blockchain não é apenas uma tecnologia – é a chave para democratizar o acesso a um sistema financeiro justo, rápido e sem barreiras.",
      linkText: "Nossas soluções para WEB3",
      linkHref: "#",
      imageSrc: "/img/transformative-tech.png",
      imageAlt: "Ecossistema de tecnologias Dourado Cash"
  },
  marketplace: {
      title: "Mercado BDM",
      imageSrc: "/img/Technology-page-5.png",
      imageAlt: "Interface do Mercado BDM em um laptop",
      buttonText: "Explore o Mercado BDM",
      buttonHref: "#"
  }
};

export default function TecnologiasPage() {
  const { heroSection, transformativeTech, marketplace } = technologyPageData;

  return (
    <main>
      <TechnologyHeroSection 
        cardData={heroSection.cardData}
        imageData={heroSection.imageData}
        withBackground
      />
      <TransformativeTechSection 
        title={transformativeTech.title}
        text={transformativeTech.text}
        linkText={transformativeTech.linkText}
        linkHref={transformativeTech.linkHref}
        imageSrc={transformativeTech.imageSrc}
        imageAlt={transformativeTech.imageAlt}
      />
        <TechnologyHeroSection 
        cardData={{
          title: "BDMAP",
          text: "Encontre e seja encontrado: negócios locais e globais que aceitam BDM Digital em tempo real. Cadastre sua empresa e seja encontrado no mapa.",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/blockchain-visual.png", alt: "Blockchain Dourado Cash" }}
        imagePosition="right"
      />
      <TechnologyHeroSection 
        cardData={{
          title: "BDM Digital",
          text: "A moeda digital que transforma o futuro financeiro. Rápida, segura e sem fronteiras.",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/Technology-page-4.png", alt: "BDM Digital" }}
        imagePosition="left"
      />
      <MarketplaceFeatureSection
        title={marketplace.title}
        imageSrc={marketplace.imageSrc}
        imageAlt={marketplace.imageAlt}
        buttonText={marketplace.buttonText}
        buttonHref={marketplace.buttonHref}
      />
      <TechnologyHeroSection
        cardData={{
          title: "BDM PAY",
          text: "A solução de pagamento que revoluciona o comércio digital. Aceite BDM Digital com facilidade e segurança.",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/Technology-page-6.png", alt: "Tecnologia Dourado Cash" }}
        imagePosition="right"
      />
      
    </main>
  );
}