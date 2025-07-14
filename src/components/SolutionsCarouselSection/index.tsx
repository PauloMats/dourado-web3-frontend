"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevNextButton, DotButton } from './EmblaCarouselButtons';
import { SectionWrapper, Embla, EmblaViewport, EmblaContainer, EmblaSlide } from './styles';
import { slides } from './solutionsData';

interface SolutionsCarouselProps {
    title?: string;
}

const SolutionsCarouselSection = ({ title = "Soluções <strong>Dourado Cash</strong>" }: SolutionsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1, 
    loop: true 
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi, onSelect]);

  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12"
            dangerouslySetInnerHTML={{ __html: title }}
        />
        
        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              {slides.map((slide, index) => (
                <EmblaSlide key={index}>
                  <Image src={slide.src} alt={slide.alt} width={600} height={450} className="rounded-lg"/>
                </EmblaSlide>
              ))}
            </EmblaContainer>
          </EmblaViewport>

          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-6 h-1 rounded-full ${index === selectedIndex ? 'bg-yellow-400' : 'bg-gray-700'} cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
                <PrevNextButton 
                    onClick={scrollPrev} 
                    disabled={prevBtnDisabled} 
                    className="text-white transition-transform duration-200 ease-in-out hover:scale-125 disabled:text-gray-600 disabled:transform-none disabled:cursor-not-allowed cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </PrevNextButton>
                <PrevNextButton 
                    onClick={scrollNext} 
                    disabled={nextBtnDisabled} 
                    className="text-white transition-transform duration-200 ease-in-out hover:scale-125 disabled:text-gray-600 disabled:transform-none disabled:cursor-not-allowed cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </PrevNextButton>
            </div>
          </div>
        </Embla>
      </div>
    </SectionWrapper>
  );
};

export default SolutionsCarouselSection;