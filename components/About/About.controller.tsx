import usePersonalData from "@/hooks/usePersonalData";
import Link from "next/link";

const useAbout = (ruLang: boolean) => {

  const getYears = (date: Date) => {
    return Math.floor((new Date().getTime() - date.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  }

  const personalData = usePersonalData(ruLang);

  const texts = {
    title: ruLang
    ? 'Обо мне'
    : 'About me',
    text: ruLang
    ? <>
      <p>Привет! Меня зовут Дима, мне {getYears(new Date(1990, 7, 22))} года. Родился в Беларуси, живу на Кипре.</p>
      <p>Работаю в индустрии {getYears(new Date(2012, 5, 30))} лет. {getYears(new Date(2020, 10, 1))} последних в роли JavaScript разработчика. Ранее занимался <span style={{whiteSpace: 'nowrap'}}>digital-маркетингом</span> и часто выступал в роли заказчика сайтов и приложений.</p>
      <p>По образованию я маркетолог, окончил Бакалавриат в Белорусском Государственном Университете в 2014. И Магистратуру в Белорусском торгово-экономическом университете потребительской кооперации в 2017.</p>
      <p>Мое увлечение программированием началось в 2019 году в рамках горизонтального развития карьеры. Для того что бы лучше понимать программистов и точнее ставить им задачи, я записался на курсы по верстке. В том же году я написал свой первый сервис для полуавтоматической <a target='_blank' href="/gsl/">генерации сокращенных ссылок с UTM метками</a> на PHP и мне это очень понравилось 😊. Нашел его, когда делал этот сайт, завернул в Docker что бы разместить на своем облачном свервере и <a target='_blank' href="https://github.com/dmlvr/gsl">запушил в GitHub</a>, что бы сохранить на память.</p>
      <p>Около года программирование оставалось моим хобби и немного суперсилой, которая позволяла быстро своими руками сделать лендинг для запуска рекламной кампании. Я продолжал интересоваться кодингом, взял еще несколько курсов, прокачивался в верстке, освоил JavaScript, TypeScript, Node.js, React.js, Next.js, современные <span style={{whiteSpace: 'nowrap'}}>CSS-фреймворки</span>. Начал работать с git. И научился писать тесты на Jest.</p>
      <p>К октябре 2020 года я оставил маркетинг и устроился в компанию IEK, где и работаю сейчас как фрилансер по договору ГПХ.</p>
      <p>Теперь я ищу работу разработчика на Кипре. Мой <Link href="/portfolio">опыт и проекты</Link> описаны в соответсвующем разделе, <Link href={personalData.cvLink}>CV доступен по ссылке</Link>. Буду очень рад возможности пообщаться и посотрудничать.</p>
    </>
    : <>
      <p>Hello! My name is Dmitry, I am {getYears(new Date(1990, 7, 22))} years old. I was born in Belarus and live in Cyprus.</p>
      <p>I have been working in the industry for {getYears(new Date(2012, 5, 30))} years, the last {getYears(new Date(2020, 10, 1))} as a JavaScript developer. Previously, I was involved in digital marketing and often acted as a client for websites and applications.</p>
      <p>I have a background in marketing, having graduated with a Bachelor&apos;s degree from Belarusian State University in 2014 and a Master&apos;s degree at degree from the Belarusian Trade and Economics University of Consumer Cooperatives in 2017.</p>
      <p>My interest in programming began in 2019 as part of my career development. To better understand programmers and set tasks more accurately, I enrolled in web development courses. That same year, I wrote my first service for semi-automatic <a target='_blank' href="/gsl/">generation of shortened links with UTM tags</a> in PHP, which I really enjoyed 😊. I found it when making this site, wrapped it in Docker to deploy on my cloud server, and <a target='_blank' href="https://github.com/dmlvr/gsl">pushed it to GitHub</a> to keep for memory.</p>
      <p>For about a year, programming remained my hobby and a bit of a superpower, allowing me to quickly create a landing page for launching an advertising campaign with my own hands. I continued to be interested in coding, took several more courses, improved my skills in web development, mastered JavaScript, TypeScript, Node.js, React.js, Next.js, modern CSS frameworks, started working with git, and learned to write tests in Jest.</p>
      <p>By October 2020, I left marketing and joined the company IEK, where I now work as a freelancer under a civil contract.</p>
      <p>Now I am looking for a developer job in Cyprus. My <Link href="/portfolio">experience and projects</Link> are described in the relevant section, and my <Link href={personalData.cvLink}>CV is available via the link</Link>. I would be very happy to have the opportunity to communicate and collaborate.</p>
    </>
  }

  return {
    texts,
    personalData
  }
}

export default useAbout;