import { posFeaturesData } from '@/components/PosFeaturesSection/posFeaturesData';
import TechnologyHeroSection from '@/components/TechnologyHeroSection';
import PosFeaturesSection from '@/components/PosFeaturesSection';

export default function BdmPosPage() {
    return (
        <main>
            <TechnologyHeroSection 
        cardData={{
          title: "BDM POS",
          text: "<li>Faça e Receba pagamentos de BDM Digital.</li> <li>Aumente a visibilidade do seu negócio para milhares de usuários com o BDMap.</li><li>Gestão de funcionários.</li><li>Controle de lucros e despesas.</li><li>Diversos Benefícios em uma única plataforma.</li>",
          buttonText: "Saiba mais"
        }}
        imageData={{ src: "/img/pos-page1.png", alt: "Blockchain Dourado Cash" }}
        imagePosition="left"
      />
      <PosFeaturesSection data={posFeaturesData} />
        </main>
    );
}