'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';
import { useState } from 'react';
import {
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from 'lucide-react';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <Container className="bg-[#EAB317] text-black py-10 rounded-t-2xl">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* GRUPO 1: Esquerda (Logo e Copyright) */}
        <div className="flex flex-col justify-between h-full">
          <Link href="/">
            <Image
              src={"/img/Dourado-logo-footer.png"}
              alt="Dourado Logo"
              width={200}
              height={70}
              className="h-auto"
              priority
            />
          </Link>
          <div className="text-sm text-black mt-10 md:mt-16">
            ©{year} Dourado Cash. Todos os direitos Reservados | Desenvolvido por Dourado.cash
          </div>
        </div>

        {/* GRUPO 2: Centro (Redes Sociais) */}
        <div className="flex justify-center">
           <div className="flex gap-4 text-black text-2xl">
              <Link href="#" aria-label="X (Twitter)"><Twitter/></Link>
              <Link href="#" aria-label="Instagram"><Instagram /></Link>
              <Link href="#" aria-label="YouTube"><Youtube /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin /></Link>
            </div>
        </div>

        {/* GRUPO 3: Direita (As duas listas de links) */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://dourado.cash/copyright" className="hover:underline">CopyRight</Link></li>
              <li><Link href="https://dourado.cash/privacidade" className="hover:underline">Privacidade</Link></li>
              <li><Link href="https://dourado.cash/tarifaselimites" className="hover:underline">Tarifas e Limites</Link></li>
              <li><Link href="#" className="hover:underline">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">MANUAL DE COMPLIACE</Link></li>
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="#" className="hover:underline">Cadastrar Empresa</Link></li>
              <li><Link href="#" className="hover:underline">Entre em Contato</Link></li>
            </ul>
          </div>
        </div>
        
      </div>
    </Container>
  );
}