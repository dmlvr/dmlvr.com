import { socialList } from '@/constants'

const useMain = ({
  ruLang
}: {ruLang: boolean}) => {

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
    stack: 'React, Next.js, Node.js, Fastify, Express, Directus, PostrgeSQL, Redux, HTML5, CSS3/LESS/SASS',
    description: ruLang
    ? 'JavaScript разработчик с опытом работы в индустрии. Имею навыки командной работы, JavaScript, React.js, Node.js.'
    : 'Experienced JavaScript Developer with a demonstrated history of working in the industry.',
    btn: ruLang
    ? 'Смотреть CV'
    : 'Explore CV',
  }

  return {
    texts,
    socialList
  }
}

export default useMain;