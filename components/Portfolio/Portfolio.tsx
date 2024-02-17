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
        <title>{texts['title']}</title>
      </Head>
      <main className={styles['portfolio']}>
        <h1>{texts.title}</h1>
        <ul className={styles['projects']}>
          {projects.map((project) => (
            <li key={project.title} className={styles['projects__card']}>
              <h2 className={styles['title']}>{project.title}</h2>
              <div 
                className={`
                  ${styles['video']}
                  ${!darkTheme && styles['video--shadow']}
                `}
              >
                <video 
                  muted={true} 
                  autoPlay={true} 
                  loop={true} 
                  controls={false}
                  playsInline={true}
                >
                  <source src={project.videoUrls.mp4} type="video/mp4"/>
                </video>
                {project.videoComment.length > 0 && <span>{project.videoComment}</span>}
              </div>
              <div className={styles.texts}>
                {project.details}
                {project.links && 
                project.links.length > 0 &&
                  <div className={styles['links']}>
                    {project.links.map((link) => (
                      <Link key={link.url} href={link.url}>
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