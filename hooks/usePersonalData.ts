const usePersonalData = (ruLang: boolean) => {
  return {
    name: ruLang
    ? 'Дмитрий Лавринович'
    : 'Dmitry Lavrinovich',
    jobTitle: ruLang
    ? 'JavaScript разработчик'
    : 'JavaScript developer',
    cvLink: ruLang
    ? 'Dmitry_Lavrinovich_-_Javascript_Developer-ru.pdf'
    : 'Dmitry_Lavrinovich_-_Javascript_Developer-en.pdf',
    stack: 'Node.js, Fastify, Express, Docker, Directus, PostrgeSQL, React, Next.js, Redux, HTML5, CSS3/LESS/SASS',
  }
}

export default usePersonalData;