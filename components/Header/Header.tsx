import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import useHeader from './Header.controller';

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

  const { 
    menuItems, 
    currentPath,
    isMenuOpen,
    setIsMenuOpen
  } = useHeader(ruLang)

  return (
    <header className={styles['header']}>
      { isMenuOpen && 
        <div 
          className={styles['underlay']}
          onClick={() => setIsMenuOpen(false)} 
        />
      }
      <Link 
        className={styles['logo']} 
        href="/"
        onClick={() => setIsMenuOpen(false)}
      >
        <svg width={100} height={46} viewBox="0 0 250 114">
          <use xlinkHref='./img/sprite.svg#logo' />
        </svg>
      </Link>
      <button 
        className={`
        ${styles['mobile-nav']}
        ${isMenuOpen && styles['mobile-nav--open']}
      `}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <span>Open\Close navigations</span>
      </button>
      <nav 
        className={`
          ${styles['navigations']}
          ${isMenuOpen && styles['navigations--open']}
        `}
      >
        <ul className={styles['menu-list']}>
          {menuItems.map((menuItem) => (
            <li 
              key={menuItem.path} 
              style={{
                fontWeight: currentPath === menuItem.path 
                ? 'bold' 
                : 'normal'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link 
                href={menuItem.path}
              >
                {menuItem.text}
              </Link>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => ruLangHandler()}
          className={styles['langs']}
        >
          <span>ру</span>
          <svg 
            className={`${styles['lang__svg']} ${ruLang && styles['lang__svg--ru']}`} 
            width={36} 
            height={20}
          >
            <use xlinkHref='./img/sprite.svg#header-dark-mode-btn' />
          </svg>
          <span>en</span>
        </button>
        <div className={styles['theme']}>
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
      </nav>
    </header>
  );
}

export default Header;