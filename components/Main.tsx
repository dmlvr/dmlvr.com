import React from 'react';
import styles from '@/styles/main.module.scss';
import mainImage from '@/public/img/main.png';
import Image from 'next/image'
import Link from 'next/link';

type Props = {
  darkTheme: boolean
}

function Main({darkTheme}: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.image}>
        <Image alt={'Dmitry Lavrinovich'} src={mainImage} width={400} height={400} />
      </div>
      <div className={darkTheme ? `${styles.content} ${styles.content__Dark}` : styles.content}>
        <span className={styles.subtitle}>Hello, I am</span>
        <h1 className={styles.title}>Dmitry Lavrinovich</h1>
        <p className={styles.techstack}>JavaScript developer | React.js, Next,js, Express, PostgreSQL, Sass, Less, Redux, Redux Toolkit, HTML, CSS, Javascript, Typescript</p>
        <p className={styles.about}>Experienced <b>JavaScript</b> Developer with a demonstrated history of working in the internet industry. Skilled in <b>Teamwork</b>, <b>JavaScript</b>, <b>React.js</b>, <b>Node.js</b>.</p>
      </div>
      <Link className={darkTheme ? `${styles.btn} ${styles.btn__Dark}` : styles.btn} href={'Dmitry_Lavrinovich_-_Frontend_Developer.pdf'}>
        <span>Explore CV</span>
        <svg width="6" height="9" viewBox="0 0 6 9">
          <use xlinkHref='./img/sprite.svg#polygon' />
        </svg>
      </Link>
      <ul className={darkTheme ? `${styles.socialList} ${styles.socialList__Dark}` : styles.socialList}>
      <li>
          <Link href={'https://www.linkedin.com/in/dmlvr/'}>
            <span>LinkedIn</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref='./img/sprite.svg#linkedin' />
            </svg>
          </Link>
        </li>
        <li>
          <Link href={'https://github.com/dmlvr/'}>
          <span>Github</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref='./img/sprite.svg#github' />
            </svg>
          </Link>
        </li>
        <li>
          <Link href={'https://www.facebook.com/dm1vr'}>
            <span>facebook</span>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref='./img/sprite.svg#facebook' />
            </svg>
          </Link>
        </li>
        <li>
          <Link href={'https://t.me/dmlvr'}>
            <span>facebook</span>
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