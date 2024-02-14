import { z } from "zod";

const useFormValidation = (ruLang: boolean) => {

  const formValidation = z.object({
    name: z.string().refine(value => value.trim() !== '', {
      message: ruLang
        ? 'Как Вас зовут?'
        : 'What is your name?',
    }).refine(value => value.length <= 50, {
      message: ruLang
      ? 'Если Ваше имя действительно больше 50 символов я извиняюсь. Сократите его пожалуйста!'
      : 'If your name is really more than 50 characters, I apologize. Please shorten it!'
    }),
    email: z.string().email({
      message: ruLang
        ? 'Пожалуйста, введите корректный email'
        : 'Invalid email format. Please provide a valid email address.',
    }),
    message: z.string().refine(value => value.length <= 1000, {
      message: ruLang
      ? 'Краткость сестра таланта, постарайтесь уложится в 1000 символов.'
      : 'Brevity is the sister of talent, try to keep it within 1000 characters.',
    }),
  });
  return formValidation;
}

export default useFormValidation;
