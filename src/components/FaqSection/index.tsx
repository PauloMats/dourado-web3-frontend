"use client";

import React, { useState } from 'react';
import { SectionWrapper } from './styles';
import FaqItem from './FaqItem';
import { faqItems } from './faqData'; 

interface FaqSectionProps {
  title?: string;
  items?: { question: string; answer: string }[];
}

const FaqSection = ({ title = "Perguntas Frequentes", items = faqItems }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          {title}
        </h2>

        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;