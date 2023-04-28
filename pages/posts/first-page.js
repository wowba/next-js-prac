import Head from "next/head"
import Layout from "../../components/Layout"

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>첫번째 글</title>
      </Head>
      <h1> 안녕하세요 </h1>
    </Layout>
  )

}

export default FirstPost