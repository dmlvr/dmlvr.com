import { socialList } from '@/const'
import usePersonalData from '@/hooks/usePersonalData';

const useContacts = (ruLang: boolean) => {

  const texts = {
    title: ruLang
    ? 'Контакты'
    : 'Contacts',
    paragraph: ruLang
    ? 'Быстро отвечаю в telegram. Несколько раз в неделю просматриваю почту и LinkedIn.'
    : 'Answer quickly in telegram. I check my email and LinkedIn some times a week.'
  }

  const personalData = usePersonalData(ruLang);

  return {
    texts,
    socialList,
    personalData
  }
}

export default useContacts;