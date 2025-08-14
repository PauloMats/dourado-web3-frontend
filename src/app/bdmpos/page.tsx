import { posFeaturesData } from '@/components/PosFeaturesSection/posFeaturesData';
import TechnologyHeroSection from '@/components/TechnologyHeroSection';
import PosFeaturesSection from '@/components/PosFeaturesSection';
import MobileFeaturesSection from '@/components/MobileFeaturesSection';
import { mobileFeaturesData } from '@/components/MobileFeaturesSection/mobileFeaturesData';
import NfcFeaturesSection from '@/components/NfcFeaturesSection';
import { nfcFeaturesData } from '@/components/NfcFeaturesSection/nfcFeaturesData';
import { payFeatureData } from '@/components/PayFeatureSection/payFeatureData';
import PayFeatureSection from '@/components/PayFeatureSection';

export default function BdmPosPage() {
    return (
        <main>
            <TechnologyHeroSection 
        cardData={{
          title: "BDM POS",
          text: "Faça e Receba pagamentos de BDM Digital.  Aumente a visibilidade do seu negócio para milhares de usuários com o BDMap. Gestão de funcionários. Controle de lucros e despesas. Diversos Benefícios em uma única plataforma. ",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/pos-page1.png", alt: "Blockchain Dourado Cash" }}
        imagePosition="left"
      />
      <PosFeaturesSection data={posFeaturesData} />
      <MobileFeaturesSection data={mobileFeaturesData} />
      <NfcFeaturesSection data={nfcFeaturesData} />
      <PayFeatureSection data={payFeatureData} />
      </main>
    );
}