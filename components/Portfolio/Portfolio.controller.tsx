import usePersonalData from "@/hooks/usePersonalData";

const usePortfolio = (ruLang: boolean) => {

  const texts = {
    title: ruLang
    ? 'Опыт и проекты'
    : 'Portfolio',
  }

  const projects = [
    {
      title: ruLang 
      ? 'Каталог продукции для компании IEK'
      : 'Product catalog for IEK company',
      videoUrls: {
        mp4: '/img/catalog-next.mp4',
        poster: '/img/next-poster.png'
      },
      videoComment: '',
      details: ruLang
      ? <>
        <p>Большое web-приложение на Next.js, отвечающее за отрисовку каталога продукции. Cамый высоконагруженный проект среди тех, которые я разрабатывал.</p>
              <ul>
                <li>Более 30&nbsp;000 карточек товаров;</li>
                <li>Более 25&nbsp;000 уникальных пользователей ежедневно;</li>
                <li>Вывод информации на 3-х языках;</li>
                <li>3 темы оформления.</li>
                <li>Используется на 5 сайтах компании.</li>
              </ul>
              <p>На проекте я отвечаю за frontend. Посмотреть в бою можно на:</p>
        </>
      : <>
          <p>A large web application based on Next.js, responsible for rendering the product catalog. The most highly loaded project among those that I have developed.</p>
            <ul>
              <li>More than 30,000 product cards;</li>
              <li>More than 25,000 unique users daily;</li>
              <li>Display information in 3 languages;</li>
              <li>3 design themes;</li>
              <li>Used on 5 company websites.</li>
            </ul>
          <p>I am responsible for the frontend on the project. You can watch at:</p>
        </>,
      links: [
        {
          name: 'IEK',
          url: ruLang ? 'https://www.iek.ru/products/catalog' : 'https://iek.global/products/catalog/'
        },
        {
          name: 'ONI',
          url: 'https://oni-system.com/products/catalog'
        },
        {
          name: 'ITK',
          url: 'https://www.itk-group.ru/products/catalog'
        }
      ]
    },
    {
      title: ruLang 
      ? 'База результатов испытаний продукции'
      : 'Product test results database',
      videoUrls: {
        mp4: '/img/test-list.mp4',
        poster: '/img/dt-poster.png'
      },
      videoComment: ruLang ? 'Интерфейс записан на моковых данных.' : 'The interface is written on mock data.',
      details: ruLang
      ? <>
          <p>Сервис для удобного сохранение, редактирования и просмотра информации и испытыниях продукции на соответствие стандартам ГОСТ и ТУ.</p>
            <ul>
              <li>Доступ к приложению только для авторизирвоанных пользователей;</li>
              <li>Cложная форма для создания Листа испытаний, каскадно создающая сущности;</li>
              <li>Несколько форм отчетов, формирующихъся на клиентской стороне;</li>
              <li>Кеширование данных с целью предотвращения потерь частично заполненных форм;</li>
              <li>Frontend: Next.js, Backend: directus, Дополнительно: Redux</li>
            </ul>
          <p>На проекте я отвечаю за beckend и frontend. Доступ к проекту ограничен, но я готов продемонстрировать его функционал и код при личном общении.</p>
        </>
      : <>
          <p>A service for conveniently saving, editing and viewing information and testing products for compliance with GOST and TU standards.</p>
            <ul>
              <li>Access to the application is only for authorized users;</li>
              <li>A complex form for creating a Test Sheet that creates entities in a cascade;</li>
              <li>Several forms of reports generated on the client side;</li>
              <li>Caching data to prevent loss of partially completed forms;</li>
              <li>Frontend: Next.js, Backend: directus, Additionally: Redux</li>
            </ul>
          <p>I am responsible for backend and frontend on the project. Access to the project is limited, but I am ready to demonstrate its functionality and code in person.</p>
        </>,
      links: []
    },
  ]

  const personalData = usePersonalData(ruLang);

  return {
    texts,
    projects,
    personalData
  }
}

export default usePortfolio;