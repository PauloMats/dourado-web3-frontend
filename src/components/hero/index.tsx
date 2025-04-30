'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Placeholder, Text, Title } from './styles';
import Button from '../button/button';
import Props from './typo';
import { MediaService } from '@/services/mediaService';

const Hero = (props: Props) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [media, setMedia] = useState({
    backgroundimage: '',
    video: ''
  });

  const handleVideoLoad = () => setIsVideoLoaded(true);

  const fetchMedia = useCallback(async () => {
    try {
      const [background, video] = await Promise.all([
        props.backgroundimage ? MediaService(props.backgroundimage) : Promise.resolve(null),
        props.media ? MediaService(props.media) : Promise.resolve(null),
      ]);

      setMedia({
        backgroundimage: background?.source_url || '',
        video: video?.source_url || '',
      });
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  }, [props.backgroundimage, props.media]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.load();
        }
      },
      { threshold: 0.25 }
    );

    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <Container
      backgroundimage={media.backgroundimage}
      className='w-full pb-[205px] pt-[310px] flex flex-col items-center justify-center relative overflow-hidden'
    >
      {!media.backgroundimage && media.video && (
        <>
          {!isVideoLoaded && props.placeholder && (
            <Placeholder
              loading='lazy'
              src={props.placeholder}
              alt={props.title}
              className='opacity-25 block w-full h-full object-cover absolute top-0 left-0 z-0'
            />
          )}
          <video
            ref={videoRef}
            src={media.video}
            className={`opacity-25 block w-full h-full object-cover absolute top-0 left-0 z-0 ${isVideoLoaded ? 'loaded' : ''}`}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            preload="none"
          />
        </>
      )}
      <div className='container relative z-1 m-auto flex flex-col gap-16 items-center justify-center'>
        {props.title && (
          <Title
            className='text-center text-3xl lg:text-6xl'
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        )}
        {props.text && (
          <Text
            className='text-center text-base lg:text-3xl'
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        )}
        {props.btnLabel && props.url && (
          <Button
            effect={props.btnAnimation}
            radius={999}
            tag='a'
            href={props.url}
            className={props.btnClass}
          >
            {props.btnLabel}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Hero;
