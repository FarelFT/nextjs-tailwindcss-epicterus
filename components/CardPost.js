import React from 'react';
import Link from 'next/link';
import InfoPosts from '@components/InfoPost';

export default function CardPost({ thumbnail, ...infoPosts }) {
  return (
    <article>
      <Link href='/detail'>
        <a>
          <img src={thumbnail} className='w-full rounded mb-4' />
        </a>
      </Link>
      <InfoPosts {...infoPosts} />
    </article>
  );
}
