import { socialList } from '@/constants'
import usePersonalData from '@/hooks/usePersonalData';

const useMain = (ruLang: boolean) => {

  const texts = {
    hello: ruLang
    ? 'Привет, меня зовут'
    : 'Hello, I am',
    description: ruLang
    ? <>JavaScript разработчик. 3 года опыта коммерческой разработки.<br/>Навыки командной работы.</>
    : <>JavaScript Developer with a demonstrated history of working in the industry.<br/>3 years experience.</>,
    btn: ruLang
    ? 'Смотреть CV'
    : 'Explore CV',
  }

  const personalData = usePersonalData(ruLang);

  return {
    texts,
    socialList,
    personalData
  }
}

export default useMain;