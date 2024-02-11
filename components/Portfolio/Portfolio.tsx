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
              <p>Система хранения информации о результатах испытаний продукции для IEK</p>
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
          <li className={styles.projectCard}>
            <h2 className={styles.title}>База результатов испытаний продукции</h2>
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
              <p>Сервис для удобного сохранение, редактирования и просмотра информации и испытыниях продукции на соответствие стандартам ГОСТ и ТУ.</p>
              <ul>
                <li>Доступ к приложению только для авторизирвоанных пользователей.</li>
                <li>Чрезвычайно сложная форма для создания Листа испытаний.</li>
                <li>Несколько форм отчетов, которые генерируются на клиенте.</li>
                <li>Кеширование данных на клиенте с целью предотвращения потерь.</li>
                <li>Frontend: Next.js, Backend: directus</li>
              </ul>
              <p>На проекте я отвечаю за beckend и frontend. Доступ к проекту ограничен, но я готов продемонстрировать его функционал и код при личном общении.</p>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Portfolio;