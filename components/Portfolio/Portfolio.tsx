import { Props } from '@/types/types';
import Head from 'next/head';
import React from 'react';
import styles from './Portfolio.module.scss'
import usePortfolio from './Portfolio.controller';
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
          {projects.map((el) => (
            <li className={styles.projectCard}>
              <h2 className={styles.title}>{el.title}</h2>
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
                  <source src={el.videoUrls.mp4} type="video/mp4"/>
                </video>
              </div>
              <div className={styles.texts}>
                {el.details}
                {el.links && 
                el.links.length > 0 &&
                  <div className={styles.links}>
                    {el.links.map((link) => (
                      <Link href={link.url}>
                      <span>{link.name}</span>
                    </Link>
                    ))}
                  </div>
                }
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Portfolio;