import React from 'react';
import styles from './Main.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import ym from 'react-yandex-metrika';
import { Props } from '@/types/types'
import useMain from './Main.controller';
import Head from 'next/head';

function Main({ ruLang }: Props) {

  const { texts, socialList } = useMain({ ruLang })

  return (
    <>
    <Head>
      <title>{`${texts.name}, ${texts.jobTitle}`}</title>
      <meta name="description" content={`${texts.name}, ${texts.jobTitle} | ${texts.stack}`} />
    </Head>
    <main className={styles.main}>
      <div className={styles.image}>
        <Image alt={texts.name} src={`/img/main.png`} width={400} height={400} />
      </div>
      <div className={styles.content}>
        <span className={styles.subtitle}>{texts.hello}</span>
        <h1 className={styles.title}>{texts.name}</h1>
        <p className={styles.techstack}>{`${texts.jobTitle} | ${texts.stack}`}</p>
        <p className={styles.about}>{texts.description}</p>
      </div>
      <Link 
        className={styles.btn} 
        href={'Dmitry_Lavrinovich_-_Javascript_Developer.pdf'} 
        onClick={() => ym('reachGoal','getCV')}
      >
        <span>{texts.btn}</span>
        <svg width="6" height="9" viewBox="0 0 6 9">
          <use xlinkHref='./img/sprite.svg#polygon' />
        </svg>
      </Link>
      <ul className={styles.socialList}>
        {socialList.map((item) => (
          <li key={item.name}>
          <Link 
            href={item.url}
            onClick={() => ym('reachGoal', item.name)}
          >
            <span>{item.name}</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref={`./img/sprite.svg#${item.name}`} />
            </svg>
          </Link>
        </li>
        ))}
      </ul>
    </main>
    </>
  );
}

export default Main;