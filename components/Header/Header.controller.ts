import { useRouter } from "next/router";
import { useState } from "react";

const useHeader = (ruLang: boolean) => {

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      text: ruLang ? 'Обо мне' : 'About me',
      path: '/about'
    },
    {
      text: ruLang ? 'Опыт и проекты' : 'Portfolio',
      path: '/portfolio'
    },
    {
      text: ruLang ? 'Контакты' : 'Contacts',
      path: '/contacts'
    },
  ]

  return {
    menuItems,
    currentPath: router.pathname,
    isMenuOpen,
    setIsMenuOpen
  }
}

export default useHeader;