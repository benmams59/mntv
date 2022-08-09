import Head from 'next/head'
import Header from '../components/header'
import Section from '../components/section'
import { useRouter } from 'next/router'
import SearchContainer from '../components/search_container'

function Search({ data }) {
  const router = useRouter()
  const { q } = router.query

  return (
    <>
      <Head>
        <title>MNTv - Search</title>
      </Head>
      <Header />
      <SearchContainer query={q} data={data} />
    </>
  )
}

export async function getServerSideProps({ query }) {
  let res
  let data
  const { q } = query
  try {
    res = await fetch(`http://localhost:5000/search/${q}`)
    data = await res.json()
    console.log(data)
  } catch (e) {
    console.log(e)
    data = null
  }
  return {props: { data }}
}

export default Search