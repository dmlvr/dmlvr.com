import { socialList } from '@/constants'
import useFormValidation from '@/utils/formValidation';
import { useState } from 'react'
import { ZodError } from "zod";

const useContacts = (ruLang: boolean, csrfToken: string) => {

  const texts = {
    title: ruLang
    ? 'Контакты'
    : 'Contacts',
    paragraph: ruLang
    ? 'Быстро отвечаю в telegram. Несколько раз в неделю просматриваю почту и LinkedIn. Можно написать мне в почту прямо с сайта.'
    : 'Answer quickly in telegram. I check my email and LinkedIn some times a week. You can email me directly from the site.'
  }

  return {
    texts,
    socialList,
  }
}

export default useContacts;