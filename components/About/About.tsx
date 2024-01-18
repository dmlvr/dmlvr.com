import React from 'react';
import { Props } from '@/types/types'
import styles from './About.module.scss';
import Image from 'next/image'
import useAbout from './About.controller';
import Head from 'next/head'

function About({darkTheme, ruLang}: Props) {

  const { getYears, texts } = useAbout(ruLang)

  return (
    <>
      <Head>
        <title>{texts.title}</title>
        {/* <meta name="description" content={`${texts.name}, ${texts.jobTitle} | ${texts.stack}`} /> */}
      </Head>
      <main className={styles.about}>
        <div className={styles.image}>
          <Image alt={'about'} width={500} height={800} src={'/img/about.jpg'} />
        </div>
        <div className={styles.text}>
          <h1>{texts.title}</h1>
          <div className={styles.paragraps}>
            <p>{`Привет! Меня зовут Дима, мне ${getYears(new Date(1990, 7, 22))} года. Родился в Беларуси, сейчас живу на Кипре.`}</p>
            <p>{`Работаю в индустрии ${getYears(new Date(2012, 5, 30))} лет. ${getYears(new Date(2021, 0, 15))} последних в роли JavaScript разработчика.`} Ранее занимался <span style={{whiteSpace: 'nowrap'}}>digital-маркетингом</span> и часто выступал в роли заказчика сайтов и приложений. С удовольствием расскажу об этом при личном общении.</p>
            <p>По образованию я маркетолог, окончил бакалавратуру в <span style={{whiteSpace: 'nowrap'}}>Белорусском Государственном Университете</span> в 2014. И Магистратуру в <span style={{whiteSpace: 'nowrap'}}>Белорусском торгово-экономическом университете потребительской кооперации</span> в 2017.</p>
            <p>Мое увлечение программированием началось в 2018 году в рамках горизонтального развития карьеры. Для того что бы лучше понимать программистов и точнее ставить им задачи, я записался на курсы по верстке. В том же году я написал свой первый сервис для полуавтоматической <a target='_blank' href="/promo/gsl/index.html">генерации сокращенных ссылок с UTM метками</a>. Я специально развернул для него docker контейнер, что бы вы могли увидеть его в первозданном виде.</p>
          </div>      
        </div>
      </main>
    </>
  );
}

export default About;