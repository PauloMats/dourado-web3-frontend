import TechnologyHeroSection from "@/components/TechnologyHeroSection";

// No futuro, estes dados virão de uma chamada de API para o seu CMS
const technologyPageData = {
  heroSection: {
    cardData: {
      title: "Criar seu negócio na <span>Web3</span> ficou fácil",
      text: "Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.",
      buttonText: "Ver Tecnologias"
    },
    imageData: {
      src: "/img/Technology-page-1.png",
      alt: "Demonstração da plataforma Dourado Cash em um laptop e celular"
    }
  }
};


export default function TecnologiasPage() {
  return (
    <main>
      <TechnologyHeroSection 
        cardData={technologyPageData.heroSection.cardData}
        imageData={technologyPageData.heroSection.imageData}
      />
      
      
    </main>
  );
}