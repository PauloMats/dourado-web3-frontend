import TechnologyHeroSection from '@/components/TechnologyHeroSection';
import { payFeatureData } from '@/components/PayFeatureSection/payFeatureData';
import PayFeatureSection from '@/components/PayFeatureSection';
import MobileFeaturesSection from '@/components/MobileFeaturesSection';
import { mobileFeaturesPay } from '@/components/MobileFeaturesSection/mobileFeaturesData';


export default function BdmPosPage() {
    return (
        <main>
            <TechnologyHeroSection 
        cardData={{
          title: "BDM POS",
          text: "Faça e Receba pagamentos de BDM Digital. Aumente a visibilidade do seu negócio para milhares de usuários com o BDMap. Gestão de funcionários. Controle de lucros e despesas. Diversos Benefícios em uma única plataforma.",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/pos-page1.png", alt: "Blockchain Dourado Cash" }}
        imagePosition="right"
      />
      <MobileFeaturesSection data={mobileFeaturesPay} />
      <PayFeatureSection data={payFeatureData} />
      </main>
    );
}