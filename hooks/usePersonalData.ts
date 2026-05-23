const usePersonalData = (ruLang: boolean) => {
  return {
    name: ruLang
    ? 'Дмитрий Лавринович'
    : 'Dmitry Lavrinovich',
    jobTitle: ruLang
    ? 'JavaScript разработчик'
    : 'JavaScript developer',
    stack: 'React, Next.js, Node.js, Fastify, Express, Docker, Directus, PostgreSQL',
  }
}

export default usePersonalData;