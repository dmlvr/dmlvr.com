import { GetServerSideProps, NextApiRequest } from 'next';
import getSetting from '@/utils/getSetting';
import { BlogProps, Post } from '@/types';
import { getClient } from '@/utils';
import { readItems } from '@directus/sdk';
import Blog from '@/components/Blog/Blog';

export default function Page(props: BlogProps) {

  const {
    darkTheme,
    ruLang,
    error,
    posts
  } = props

  if (error) {
    return (
      <h1>Произошла ошибка</h1>
    )
  }

  return (
    <Blog darkTheme={darkTheme} ruLang={ruLang} posts={posts} />
  )
}

export const getServerSideProps: GetServerSideProps<{ 
  cookiesDarkTheme: boolean | null,
  cookiesRuLang: boolean
  error?: string,
  posts?: any,
}> = async ({req}) => {

  const setting = getSetting(req as NextApiRequest);

  const { client, isClient } = getClient();

  if (!isClient) {
    return {
      props: {
        ...setting,
        error: 'Ошибка доступа, свяжитесь с администратором.',
      },
    };
  }

  try {

    const posts = (await client.request(
      readItems('Posts' as any, {
        fields: ['title', 'content', 'publication_date', 'status'],
        filter: {
          status: {
            _eq: "published"
          }
        }
      }),
    )) as Post[];

    return {
      props: {
        ...setting,
        posts
      },
    };

  } catch (error) {
    console.log(error);
    return {
      props: {
        ...setting,
        error: 'Ошибка с запросом данных.'
      },
    };
  }
}