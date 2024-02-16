import { socialList } from '@/constants'

const useMain = (ruLang: boolean) => {

  const texts = {
    hello: ruLang
    ? 'Привет, меня зовут'
    : 'Hello, I am',
    name: ruLang
    ? 'Дмитрий Лавринович'
    : 'Dmitry Lavrinovich',
    jobTitle: ruLang
    ? 'JavaScript разработчик'
    : 'JavaScript developer',
    stack: 'React, Next.js, Node.js, Fastify, Express, Docker, Directus, PostrgeSQL, Redux, HTML5, CSS3/LESS/SASS',
    description: ruLang
    ? <>JavaScript разработчик. 3 года опыта в индустрии.<br/>Навыки командной работы.</>
    : <>JavaScript Developer with a demonstrated history of working in the industry.<br/>3 years experience.</>,
    btn: ruLang
    ? 'Смотреть CV'
    : 'Explore CV',
  }

  const cvLink = ruLang
    ? 'Dmitry_Lavrinovich_-_Javascript_Developer-ru.pdf'
    : 'Dmitry_Lavrinovich_-_Javascript_Developer-en.pdf'

  return {
    texts,
    socialList,
    cvLink
  }
}

export default useMain;