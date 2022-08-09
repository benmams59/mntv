import Head from "next/head";
import Header from "../components/header";
import Section from "../components/section";

export default function Novies() {
  return (
    <>
      <Head>
        <title>MNTv - Movies</title>
      </Head>
      <Header />
      <Section name="Movies" />
    </>
  )
}