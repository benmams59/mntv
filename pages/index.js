import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'
import Section from '../components/section'
import Presentation from '../components/presentation'

function Home({ data }) {
  const trending = data["data"]
  const video = data["video"]
  return (
    <>
      <Head>
        <title>MNTv - Home</title>
      </Head>
      <Header />
      <Presentation movie={data}/>
      <Section name="Trending" data={trending} />
    </>
  )
}

export async function getServerSideProps() {
  let res
  let data
  try {
    res = await fetch("http://localhost:5000/trending")
    data = await res.json()
    console.log("Data got")
  } catch (e) {
    console.log(e)
    data = null;
  }
  return {props: { data }}
}

export default Home