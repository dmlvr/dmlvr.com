import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

type Props = {
  darkTheme: boolean;
  themeHandler: () => void;
  ruLang: boolean;
  ruLangHandler: () => void;
}

function Header({
  darkTheme, 
  themeHandler,
  ruLang,
  ruLangHandler
}: Props) {
  
  return (
    <header className={styles.header}>
      <Link className={darkTheme ? `${styles.logo} ${styles.logo__Dark}` : styles.logo} href="/">
        <svg width={100} height={46} viewBox="0 0 250 114">
          <use xlinkHref='./img/sprite.svg#logo' />
        </svg>
      </Link>
      <ul className={darkTheme ? `${styles.menu} ${styles.menu__Dark}` : styles.menu}>
        <li><Link href="about">Обо мне</Link></li>
        <li><Link href="portfolio">Опыт и проекты</Link></li>
        <li><Link href="contacts">Контакты</Link></li>
      </ul>
      <button 
        onClick={() => ruLangHandler()}
        className={darkTheme 
          ? `${styles.langs} ${styles.langs__Dark}` 
          : styles.langs
        }
      >
        <span>ру</span>
        <svg 
          className={ruLang ? `${styles.langSvg} ${styles.langSvg__Ru}` : styles.langSvg} 
          width={36} 
          height={20}
        >
          <use xlinkHref='./img/sprite.svg#header-dark-mode-btn' />
        </svg>
        <span>en</span>
      </button>
      <div className={styles.theme}>
        <button onClick={() => themeHandler()}>
          <svg width={36} height={20}>
            {darkTheme
            ? <use xlinkHref='./img/sprite.svg#header-dark-mode-btn' />
            : <use xlinkHref='./img/sprite.svg#header-light-mode-btn' />
            }
          </svg>
        </button>
        {darkTheme
        ? <img src='./img/header-dark-mode-icon.png' alt='dark mode icon'/>
        : <svg width="23" height="24" viewBox="0 0 23 24"><use xlinkHref='./img/sprite.svg#header-light-mode-icon' /></svg>
        }
      </div>
    </header>
  );
}

export default Header;