import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { useEffect, useState } from 'react';

// CSR 로 할때는 서버에서 불러올 수 있는 lib 사용 불가. 
// SSG, SSR 사용시 노드 서버에서 해당 라이브러리르 불러오기 때문에 사용 가능
// import { getSortedPostsData } from '../lib/posts';

// SSG - getStaticProps() 활용
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

// SSR - getServerSideProps() 활용
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export default function Home(props) {

  // CSR - API routes 활용
  const [allPostsData, setAllPostsData] = useState([])
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then((data) => setAllPostsData(data.allPostsData))
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Next.js 공부 프로젝트</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
