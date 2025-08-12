'use client';

import React from 'react';
import { SectionWrapper, PreTitle, Title, MetricValue, MetricLabel } from './styles';

interface Metric {
  value: string;
  label: string;
}
interface MetricsData {
  preTitle: string;
  title: string;
  metrics: Metric[];
}
interface MetricsSectionProps {
  data: MetricsData;
}

const MetricsSection: React.FC<MetricsSectionProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <PreTitle>{data.preTitle}</PreTitle>
        <Title>{data.title}</Title>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {data.metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <MetricValue>{metric.value}</MetricValue>
              <MetricLabel>{metric.label}</MetricLabel>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MetricsSection;
