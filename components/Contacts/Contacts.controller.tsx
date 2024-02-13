import { socialList } from '@/constants'
import { error } from 'console';
import { useState } from 'react'
import { z, ZodError } from "zod";

type ErrorItem = {
  code: string;
  message: string;
  path: string[];
};

const useContacts = (ruLang: boolean) => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const cleanErrors = () => {
    setErrors({
      name: '',
      email: '',
      message: ''
    })
  }

  const texts = {
    title: ruLang
    ? 'Контакты'
    : 'Contacts',
    paragraph: ruLang
    ? 'Быстро отвечаю в telegram. Несколько раз в неделю просматриваю почту и LinkedIn. Можно написать мне в почту прямо с сайта.'
    : 'I answer quickly in telegram. I check my email and LinkedIn some times a week. You can email me directly from the site.'
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

  const changeHandler = (field: Record<string, string>) => {
    cleanErrors();
    setForm((prev) => ({...prev, ...field}))
  }

  const formSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
    try {
      const Form = z.object({
        name: z.string().refine(value => value.trim() !== '', {
          message: ruLang
          ? 'Пожалуйста, укажите Ваше имя'
          : 'What is your name?'
        }),
        email: z.string().email({
          message: ruLang
          ? 'Пожалуйста, введите корректный email'
          : 'Invalid email format. Please provide a valid email address.',
        }),
        message: z.string().refine(value => value.trim() !== '' , {
          message: ruLang
          ? 'Пожалуйста, расскажите чем я могу быть Вам полезен'
          : 'Please, tell me how I can be useful to you?'
        })
      });
  
      Form.parse(form);
      
      console.log('valid');


    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const errorObject: Record<string, string> = error.errors.reduce((acc: Record<string, string>, err) => {
          const key = err.path[0];
          const message = err.message;
          acc[key] = message;
          return acc;
        }, {});
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...errorObject,
        }));
      }
    }
  };



  return {
    texts,
    socialList,
    formTexts,
    form,
    setForm,
    formSubmit,
    errors,
    cleanErrors,
    changeHandler
  }
}

export default useContacts;