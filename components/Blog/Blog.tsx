import Head from 'next/head';
import React from 'react';
import styles from './Blog.module.scss'
import { BlogProps } from '@/types';

function Blog(props: BlogProps) {

  console.log(props)

  return (
     <>
      <Head>
        <title>{`Блог`}</title>
      </Head>
      <main className={styles['main']}>
        <h1 className={styles['title']}>Блог</h1>
      </main>
    </>
  );
}

export default Blog;