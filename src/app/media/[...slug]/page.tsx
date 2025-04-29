'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { FiClock, FiUser, FiArrowLeft } from 'react-icons/fi';
import classNames from 'classnames';

import { useMedia } from '@/context/media';
import { formatDate } from '@/utils/index';

import { Body } from './style';
import { Container, Title } from '@/components/section/styles';
import { CategoryTag } from '@/components/media/styles';

import { getUser } from '@/services/userService';
import { MediaService } from '@/services/mediaService';
import { TaxonomyService } from '@/services/TaxonomyService';
import { ContentItem } from '@/services/ContentService';
import SingleSkeleton from './SingleSkeleton';

type EnrichedContent = ContentItem & {
  author_name?: string;
  _categories?: { id: number; name: string }[];
  thumbnail?: string;
};

export default function Single() {
  const { media } = useMedia();
  const [content, setContent] = useState<EnrichedContent | null>(null);

  const enrichMediaItem = useCallback(async (item: ContentItem): Promise<EnrichedContent> => {
    try {
      const [thumbnail, author, categories] = await Promise.all([
        item.featured_media ? MediaService(Number(item.featured_media)) : null,
        item.author ? getUser(Number(item.author)) : null,
        item.categories?.length ? Promise.all(item.categories.map((id) => TaxonomyService(id))) : []
      ]);

      return {
        ...item,
        thumbnail: thumbnail?.source_url,
        author_name: author?.name,
        _categories: categories
      };
    } catch (error) {
      console.error('Erro ao enriquecer item de mídia:', error);
      return item;
    }
  }, []);

  useEffect(() => {
    if (!media || media.length === 0) return;

    (async () => {
      const [firstItem] = await Promise.all(media.map(enrichMediaItem));
      if (firstItem) {
        setContent(firstItem);
      } else {
        console.warn('Nenhum conteúdo válido encontrado.');
      }
    })();
  }, [media, enrichMediaItem]);

  if (!content) return <SingleSkeleton />;

  return (
    <>
      <Container
        className='text-white text-center pt-[190px] pb-[90px] bg-fixed bg-cover relative overflow-hidden'
        backgroundimage={content.thumbnail}
        backgroundposition='center top'
      >
        <div className='container m-auto gap-6 flex flex-col relative z-10'>
          <Link
            href="/"
            className='inline-flex text-base lg:text-xl items-center gap-2 hover:text-primary-bdm3 transition-colors'
          >
            <FiArrowLeft /> Voltar para notícias
          </Link>

          <ul className='flex flex-wrap gap-4 text-sm list-none text-base lg:text-xl'>
            <li className='flex items-center gap-2'>
              <FiUser size={16} /> {content.author_name}
            </li>
            <li className='flex items-center gap-2'>
              <FiClock size={16} /> {formatDate(content.date || '')} • {content.acf?.readTime}
            </li>
          </ul>

          <Title
            className='text-start leading-1 text-xl lg:text-4xl'
            dangerouslySetInnerHTML={{ __html: content.title.rendered }}
          />

          {(content._categories ?? []).length > 0 && (
            <div className="flex gap-2 flex-wrap items-center justify-center">
              {content._categories!.map((category) => (
                <CategoryTag key={category.id} className="rounded-full px-4 py-2">
                  {category.name}
                </CategoryTag>
              ))}
            </div>
          )}
        </div>

        <div className={classNames(
          'absolute inset-0 w-full h-full bg-black opacity-80 z-1'
        )} />
      </Container>

      {content.content && (
        <Body
          className='text-base lg:text-lg xl:text-xl m-auto container text-white py-[90px] flex flex-col gap-8'
          dangerouslySetInnerHTML={{ __html: content.content.rendered }}
        />
      )}
    </>
  );
}
