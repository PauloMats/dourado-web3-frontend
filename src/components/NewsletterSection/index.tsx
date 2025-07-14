"use client";

import React, { useState } from 'react';
import { SectionWrapper, FormWrapper } from './styles';

interface NewsletterProps {
    title?: string;
    subtitle?: string;
    privacyText?: string;
    privacyLink?: string;
    placeholder?: string;
}

const NewsletterSection = ({
    title = "Receba as últimas notícias",
    subtitle = "Unsubscribe at any time.",
    privacyText = "Privacy policy",
    privacyLink = "#",
    placeholder = "Your email"
}: NewsletterProps) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Adicionar lógica de envio para a API de newsletter
        alert(`Obrigado por se inscrever: ${email}`);
        setEmail('');
    }

  return (
    <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo: Textos */}
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-400">
                    {subtitle}{' '}
                    <a href={privacyLink} className="text-white hover:text-yellow-400 underline-offset-4 hover:underline">
                        {privacyText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="inline-block ml-1"><path d="M7 17_17 7"/><path d="M7 7h10v10"/></svg>
                    </a>
                </p>
            </div>
            {/* Lado Direito: Formulário */}
            <form onSubmit={handleSubmit}>
                <FormWrapper>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        required
                        className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                    />
                    <button type="submit" className="bg-yellow-400 text-black p-2 rounded-md hover:bg-yellow-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                </FormWrapper>
            </form>
        </div>
    </SectionWrapper>
  );
};

export default NewsletterSection;