import MercadoHeroSection from "@/components/MercadoHeroSection";
import { mercadoHeroData } from "@/components/MercadoHeroSection/heroData";
import TechnologyHeroSection from "@/components/TechnologyHeroSection";

export default function MercadoBdmPage() {
  return (
    <main>
      <MercadoHeroSection data={mercadoHeroData} />
      <TechnologyHeroSection 
        cardData={{
          title: "Mercado BDM",
          text: "BDM Digital já opera em 10+ países, com transações ilimitadas em BRL, USD e EUR. Integração com marketplaces do Metaverso e plataformas DeFi.",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/mercado-bdm1.png", alt: "Blockchain Dourado Cash" }}
        imagePosition="left"
      />
      <TechnologyHeroSection 
        cardData={{
          title: "Ofertas",
          text: "Cadastre sua oferta pública ou privada. Visualize todas as informações sobre cotação, ganhos e descontos na própria plataforma.",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/mercado-bdm2.png", alt: "Blockchain Dourado Cash" }}
        imagePosition="right"
      />
    </main>
  );
}