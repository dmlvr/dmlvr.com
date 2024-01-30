import { useEffect } from 'react';

export const useColors = (darkTheme: boolean | null) => {
  useEffect(() => {
    const root = document.documentElement;
    
    if (darkTheme) {
      root.style.setProperty('--primary-color', 'var(--primary-color-dark)');
      root.style.setProperty('--tertiary-color', 'var(--tertiary-color-dark)');
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.style.setProperty('--primary-color', 'var(--primary-color-white)');
      root.style.setProperty('--tertiary-color', 'var(--tertiary-color-white)');
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
  }, [darkTheme]);
};
