import React from 'react';
import { Props } from '@/types/types'
import styles from './About.module.scss';
import Image from 'next/image'
import useAbout from './About.controller';
import Head from 'next/head'

function About({darkTheme, ruLang}: Props) {

  const { texts, personalData } = useAbout(ruLang)

  return (
    <>
      <Head>
      <title>{`${texts.title} | ${personalData.name}, ${personalData.jobTitle}`}</title>
      </Head>
      <main className={styles['about']}>
        <div 
          className={`
            ${styles['image']}
            ${!darkTheme && styles['image--shadow']}
          `}
        >
          <Image alt={texts.title} width={500} height={800} src={'/img/about.jpg'} />
        </div>
        <div className={styles['text']}>
          <h1>{texts.title}</h1>
          <div className={styles['paragraps']}>
            {texts.text}
          </div>      
        </div>
      </main>
    </>
  );
}

export default About;