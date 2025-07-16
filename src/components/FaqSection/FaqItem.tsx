"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqAnswerWrapper } from './styles';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-yellow-400/50 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-white"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg">{question}</span>
        <div className="flex-shrink-0 ml-4">
          <ChevronDown
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            size={24}
          />
        </div>
      </button>
      
      <FaqAnswerWrapper style={{ maxHeight: isOpen ? '200px' : '0px' }}>
        <p className="text-gray-400 pt-4 leading-relaxed">
          {answer}
        </p>
      </FaqAnswerWrapper>
    </div>
  );
};

export default FaqItem;