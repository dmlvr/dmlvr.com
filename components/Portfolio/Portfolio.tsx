import { Props } from '@/types/types';
import Head from 'next/head';
import React from 'react';
import styles from './Portfolio.module.scss'
import usePortfolio from './Portfolio.controller';
import Image from 'next/image'
import Link from 'next/link';

function Portfolio({ ruLang, darkTheme }: Props) {

  const { texts, projects } = usePortfolio(ruLang);

  return (
    <>
      <Head>
        <title>{texts.title}</title>
      </Head>
      <main className={styles.portfolio}>
        <h1>{texts.title}</h1>
        <ul className={styles.projects}>
          <li className={styles.projectCard}>
            <h2 className={styles.title}>Каталог продукции для компании&nbsp;IEK</h2>
            <div 
              className={styles.video}
            >
              <video 
                muted={true} 
                autoPlay={true} 
                loop={true} 
                style={{
                  borderRadius: '16px',
                  boxShadow: darkTheme ? 'none' : '0 5px 50px rgba(0,0,0,.12)'
                }} 
                poster="./img/Scene_02.png"
              >
                <source src="/img/catalog-iek.mp4" type="video/mp4"/>
              </video>
            </div>
            <div className={styles.texts}>
              <p>Большое web-приложение на Next.js, отвечающее за отрисовку каталога продукции. Cамый высоконагруженный проект среди тех, которые я разрабатывал. Объем трафика постоянно растёт.</p>
              <ul>
                <li>Более 30&nbsp;000 карточек товаров;</li>
                <li>Более 25&nbsp;000 уникальных пользователей ежедневно;</li>
                <li>Вывод информации на 3-х языках языках;</li>
                <li>3 темы оформления.</li>
                <li>Используется на 5 сайтах компании.</li>
              </ul>
              <p>На проекте я отвечаю за frontend. Посмотреть в бою можно на:</p>
              <div className={styles.links}>
                <Link href='https://www.iek.ru/products/catalog'>
                  <span>IEK</span>
                </Link>
                <Link href='https://oni-system.com/products/catalog'>
                  <span>ONI</span>
                </Link>
                <Link href='https://www.itk-group.ru/products/catalog'>
                  <span>ITK</span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Portfolio;