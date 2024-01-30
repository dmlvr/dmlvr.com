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
              <span>правая часть экрана за кадром потому, что запись велась с dev стенда на котором можно быстро переключаться между языками и шаблонами.</span>
            </div>
            <div className={styles.texts}>
              <h2>Каталог продукции для&nbsp;сайта&nbsp;IEK</h2>
              <p>Большое приложение на Next.js, отвечающее за отрисовку каталога продукции. Cамый высоконагруженный проект среди тех, которые я разрабатывал. Объем трафика постоянно растёт.</p>
              <ul>
                <li>Включает в себя более 30&nbsp;000 позиций;</li>
                <li>Ежедневно приложением пользуются в среднем 25&nbsp;000 уникальных пользователей (объём трафика постоянно растёт);</li>
                <li>Приложение поддерживает вывод информации на 3-х языках;</li>
                <li>Приложение поддерживает 3 темы оформления для отрисовки на разных сайтах.</li>
                <li>В данный момент приложение для отображения каталога используют 5 сайтов компании.</li>
              </ul>
              <p>На проекте я отвечаю за frontend.</p>
              <Link href='#'>Приложение на IEK</Link>
              <Link href='#'>Приложение на ONI</Link>
              <Link href='#'>Приложение на ITK</Link>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Portfolio;