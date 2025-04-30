/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState, Suspense, useCallback, useMemo } from 'react';
import React from 'react';
import { PageService } from '../../services/pageService';
import DynamicComponent from '../../components/DynamicComponent/DynamicComponent';

export default function Page() {
  const { slug } = useParams();
  const [content, setContent] = useState<any>(null);

  const fetchData = useCallback(async (slug: string) => {
    try {
      const _slug = Array.isArray(slug) ? slug[slug.length - 1] : slug;

      const data = await PageService(_slug);
      setContent(data.acf_blocks);
    } catch (err) {
      console.error('Error fetching page data:', err);
    }
  }, []);

  useEffect(() => {
    if (slug) {
      fetchData(Array.isArray(slug) ? slug[0] : slug);
    }
  }, [slug, fetchData]);

  const renderedContent = useMemo(() => {
    return content?.map((object: any, index: number) => (
      <Suspense key={index} fallback={<div>Carregando...</div>}>
        <DynamicComponent
          data={object.attrs.data}
          machineName={object.machine_name}
        />
      </Suspense>
    ));
  }, [content]);

  return <>{renderedContent}</>;
}