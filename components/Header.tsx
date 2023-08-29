import React from 'react';
import styles from '@/styles/header.module.scss';

type Props = {
  darkTheme: boolean;
  themeHandler: () => void;
}

function Header({
  darkTheme, 
  themeHandler
}: Props) {
  return (
    <header className={darkTheme ? `${styles.header} ${styles.header__Dark}` : styles.header}>
      <svg width={100} height={46} viewBox="0 0 250 114">
        <use xlinkHref='./img/sprite.svg#logo' />
      </svg>
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
    </header>
  );
}

export default Header;