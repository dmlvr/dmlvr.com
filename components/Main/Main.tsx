import React from 'react';
import styles from './Main.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import ym from 'react-yandex-metrika';
import { texts } from '@/const';
import { ComponentProps } from '@/types/types'

function Main({darkTheme, ruLang}: ComponentProps) {

  const lang = ruLang ? 'ru' : 'en';

  return (
    <main className={styles.main}>
      <div className={styles.image}>
        <Image alt={texts[lang].name} src={`/img/main.png`} width={400} height={400} />
      </div>
      <div className={darkTheme ? `${styles.content} ${styles.content__Dark}` : styles.content}>
        <span className={styles.subtitle}>{texts[lang].hello}</span>
        <h1 className={styles.title}>{texts[lang].name}</h1>
        <p className={styles.techstack}>{`${texts[lang].jobTitle} | ${texts[lang].stack}`}</p>
        <p className={styles.about}>{texts[lang].description}</p>
      </div>
      <Link 
        className={darkTheme 
        ? `${styles.btn} ${styles.btn__Dark}` 
        : styles.btn} 
        href={'Dmitry_Lavrinovich_-_Javascript_Developer.pdf'} 
        onClick={() => ym('reachGoal','getCV')}
      >
        <span>{texts[lang].btn}</span>
        <svg width="6" height="9" viewBox="0 0 6 9">
          <use xlinkHref='./img/sprite.svg#polygon' />
        </svg>
      </Link>
      <ul 
        className={darkTheme 
        ? `${styles.socialList} ${styles.socialList__Dark}` 
        : styles.socialList}
      >
      <li>
          <Link 
            href={'https://www.linkedin.com/in/dmlvr/'}
            onClick={() => ym('reachGoal','goToLN')}
          >
            <span>LinkedIn</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref='./img/sprite.svg#linkedin' />
            </svg>
          </Link>
        </li>
        <li>
          <Link 
            href={'https://github.com/dmlvr/'}
            onClick={() => ym('reachGoal','goToGitHub')}
          >
          <span>Github</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref='./img/sprite.svg#github' />
            </svg>
          </Link>
        </li>
        <li>
          <Link 
            href={'https://www.facebook.com/dm1vr'}
            onClick={() => ym('reachGoal','goToFB')}
          >
            <span>Facebook</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref='./img/sprite.svg#facebook' />
            </svg>
          </Link>
        </li>
        <li>
          <Link 
            href={'https://t.me/dmlvr'}
            onClick={() => ym('reachGoal','goToTG')}
          >
            <span>Telegram</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref='./img/sprite.svg#telegram' />
            </svg>
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default Main;