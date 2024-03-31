import { socialList } from '@/constants'
import usePersonalData from '@/hooks/usePersonalData';

const useMain = (ruLang: boolean) => {

  const texts = {
    hello: ruLang
    ? 'Привет, меня зовут'
    : 'Hello, I am',
    description: ruLang
    ? <>JavaScript разработчик. Более 3-х лет опыта <br/>коммерческой разработки.</>
    : <>JavaScript Developer 3+ years of expirience <br/>in web application development.</>,
    btn: ruLang
    ? 'Резюме'
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