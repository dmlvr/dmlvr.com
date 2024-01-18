import { useRouter } from "next/router";

const useHeader = ({
  ruLang
}: {ruLang: boolean}) => {

  const router = useRouter();

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
    currentPath: router.pathname
  }
}

export default useHeader;