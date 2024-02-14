import { socialList } from '@/constants'
import useFormValidation from '@/utils/formValidation';
import { useState } from 'react'
import { ZodError } from "zod";

type ErrorItem = {
  code: string;
  message: string;
  path: string[];
};

const useContacts = (ruLang: boolean, csrfToken: string) => {

  const texts = {
    title: ruLang
    ? 'Контакты'
    : 'Contacts',
    paragraph: ruLang
    ? 'Быстро отвечаю в telegram. Несколько раз в неделю просматриваю почту и LinkedIn. Можно написать мне в почту прямо с сайта.'
    : 'Answer quickly in telegram. I check my email and LinkedIn some times a week. You can email me directly from the site.'
  }

  const formTexts = {
    name: {
      label: ruLang
      ? 'Ваше имя:'
      : 'Your name:',
      placeholder: ruLang
      ? 'Иван Иванов'
      : 'John Doe',
    },
    email: {
      label: 'Email:',
      placeholder: ruLang
      ? 'Ivan.Ivanov@mail.ru'
      : 'John.Doe@example.com'
    },
    message: {
      label: ruLang
      ? 'Сообщение:'
      : 'Message:',
      placeholder: ruLang
      ? 'Расскажите чем я могу быть Вам полезен'
      : 'Tell me how I can be useful to you'
    },
    btn: ruLang
    ? 'Отправить'
    : 'Submit'
  }

  const initState = {
    name: '',
    email: '',
    message: ''
  }

  const [form, setForm] = useState(initState)

  const [errors, setErrors] = useState(initState);

  const cleanErrors = () => {
    setErrors(initState)
  }

  const changeHandler = (field: Record<string, string>) => {
    cleanErrors();
    setForm((prev) => ({...prev, ...field}))
  }

  const errorHandler = (errors: ErrorItem[]) => {
    console.log(errors)
    const errorObject: Record<string, string> = {};

    for (const err of errors) {
      const key = err.path[0] as string;
      const message = err.message;
      errorObject[key] = message;
    }
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...errorObject,
    }));
  }

  const formSubmit = async (e: any) => {
    e.preventDefault();
    try {

    const formValidation = useFormValidation(ruLang);

    formValidation.parse(form);

    const response = await fetch('/api/messageSubmit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...form, csrfToken}),
    });

    if (response.ok) {

      const responceData = await response.json();
      
      if (
          responceData.name && 
          responceData.name === 'ZodError' && 
          responceData.issues && 
          responceData.issues.length > 0
      ) {
          errorHandler(responceData.issues);
      }

    } else {
      throw new Error('Network response was not ok');
    }

    } catch (error: unknown) {
      if (error instanceof ZodError) {
        errorHandler(error.errors as ErrorItem[]);
      }
    }
  };



  return {
    texts,
    socialList,
    formTexts,
    form,
    formSubmit,
    errors,
    changeHandler
  }
}

export default useContacts;