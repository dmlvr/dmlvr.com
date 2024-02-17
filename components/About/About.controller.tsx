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
      <p>Работаю в индустрии {getYears(new Date(2012, 5, 30))} лет. {getYears(new Date(2021, 0, 15))} последних в роли JavaScript разработчика. Ранее занимался <span style={{whiteSpace: 'nowrap'}}>digital-маркетингом</span> и часто выступал в роли заказчика сайтов и приложений.</p>
      <p>По образованию я маркетолог, окончил Бакалавриат в <span style={{whiteSpace: 'nowrap'}}>Белорусском Государственном Университете</span> в 2014. И Магистратуру в <span style={{whiteSpace: 'nowrap'}}>Белорусском торгово-экономическом университете потребительской кооперации</span> в 2017.</p>
      <p>Мое увлечение программированием началось в 2018 году в рамках горизонтального развития карьеры. Для того что бы лучше понимать программистов и точнее ставить им задачи, я записался на курсы по верстке. В том же году я написал свой первый сервис для полуавтоматической <a target='_blank' href="/gsl/">генерации сокращенных ссылок с UTM метками</a> на php и мне это очень понравилось 😊. Нашел его, когда делал этот сайт, завернул в Docker что бы разместить на своем облачном свервере и <a target='_blank' href="https://github.com/dmlvr/gsl">запушил в GitHub</a>, что бы сохранить на память.</p>
      <p>По окончании курсов в течении нескольких лет, программирование оставалось моим хобби и немного суперсилой, которая позволяла быстро своими руками сделать лендинг для запуска рекламной кампании. Все это время я продолжал интересоваться кодингом, прокачивался в верстке и постепенно наращивал скилы.</p>
      <p>К концу 2020 года я оставил маркетинг и устроился разработчиком в типографию. Занимался поддержкой сайта на WordPress, написал интернет-магазин сувениров с нанесением на React.</p>
      <p>В августе 2022 вместе с женой переехал на Кипр. В это же время устроился в компанию IEK, где и работаю сейчас как фрилансер по договору ГПХ.</p>
      <p>Теперь я ищу работу разработчика на Кипре. Мой <Link href="/portfolio">опыт и проекты</Link> описаны в соответсвующем разделе, <Link href={personalData.cvLink}>CV доступен по ссылке</Link>. Буду очень рад возможности пообщаться и посотрудничать.</p>
    </>
    : <>
      <p>Hello! My name is Dmitry, I am {getYears(new Date(1990, 7, 22))} years old. Born in Belarus. Live in Cyprus.</p>
      <p>I have been working in the industry {getYears(new Date(2012, 5, 30))} years. {getYears(new Date(2021, 0, 15))} last as a JavaScript developer. Previously worked in <span style={{whiteSpace: 'nowrap'}}>digital marketing</span> and often acted as a customer for websites and applications.</p>
      <p>I am a marketer by education, received a bachelor&apos;s degree at <span style={{whiteSpace: 'nowrap'}}>Belarusian State University</span> in 2014. And a Master&apos;s degree at <span style={{whiteSpace: 'nowrap'}}>Belarusian Trade and Economic University of Consumer Cooperation</span> in 2017.</p>
      <p>My passion for programming began in 2018 as part of horizontal career development. In order to better understand programmers and more accurately set tasks for them, I signed up for a coding course. In the same year, I wrote my first service for semi-automatic <a target='_blank' href="/gsl/">generation of shortened links with UTM tags</a> and I really liked it 😊. I found it when I was making this site, wrapped it in Docker and <a target='_blank' href="https://github.com/dmlvr/gsl">pushed it to GitHub</a> to keep as a keepsake.</p>
      <p>After completing the courses for several years, programming remained my hobby and a bit of a superpower, which allowed me to quickly create a landing page for launching an advertising campaign with my own hands. All this time, I continued to be interested in coding, improved in layout and gradually increased my skills.</p>
      <p>By the end of 2020, I left marketing and got a job as a developer in a printing house. I was involved in supporting a website on WordPress, wrote an online souvenir store using React.</p>
      <p>In August 2022, he and his wife moved to Cyprus. At the same time, I got a job at the IEK company, where I now work as a freelancer under a contract.</p>
      <p>Now I&apos;m looking for a developer job in Cyprus. My <Link href="/portfolio">experience and projects</Link> are described in the corresponding section, <Link href={personalData.cvLink}>CV is available at the link</Link>.  I will be very glad to have the opportunity to communicate and collaborate.</p>
    </>
  }

  return {
    texts,
    personalData
  }
}

export default useAbout;