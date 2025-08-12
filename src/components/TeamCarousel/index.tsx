'use client';

import React from 'react';
import Image from 'next/image';
import { CarouselWrapper, CarouselTrack, TeamMemberItem } from './styles';
import { teamMembers } from './teamData';

const TeamCarousel: React.FC = () => {
  // efeito de loop contínuo
  const extendedTeam = [...teamMembers, ...teamMembers];

  return (
    <CarouselWrapper>
      <CarouselTrack>
        {extendedTeam.map((member, index) => (
          <TeamMemberItem key={index}>
            <Image
              src={member.src}
              alt={member.alt}
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </TeamMemberItem>
        ))}
      </CarouselTrack>
    </CarouselWrapper>
  );
};

export default TeamCarousel;
