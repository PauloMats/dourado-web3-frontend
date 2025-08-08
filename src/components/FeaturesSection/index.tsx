"use client";

import Image from "next/image";
import { FeaturesSectionWrapper } from "./styles";
import FeatureCard from "./FeatureCard";
import { features } from './featuresData';

const FeaturesSection = () => {
  return (
    <FeaturesSectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo Superior */}
        <div className="flex justify-center mb-16 md:mb-20">
          <Image
            src="/img/dourado-cash-logo.png"
            alt="Dourado Cash Logo"
            width={400}
            height={60}
          />
        </div>
<br /><br /> <br /><br /><br /> <br />
        {/* Grid Responsivo de Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </FeaturesSectionWrapper>
  );
};

export default FeaturesSection;