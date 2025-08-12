'use client';

import React from 'react';
import ClientsHeroSection from '@/components/ClientsFinishSection';
import { clientsHeroData } from '@/components/ClientsFinishSection/heroData';
import ScrollingLogosSection from '@/components/ScrollingLogosSection';
import { logosData } from '@/components/ScrollingLogosSection/logosData';

const ClientesEmpresasPage: React.FC = () => {
  return (
    <main>
      <ClientsHeroSection data={clientsHeroData} />
      <ScrollingLogosSection 
        topRow={logosData.topRow}
        bottomRow={logosData.bottomRow}
      />
    </main>
  );
};

export default ClientesEmpresasPage;
