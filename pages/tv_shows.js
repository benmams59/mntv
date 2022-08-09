import Head from "next/head";
import Header from "../components/header";
import Section from "../components/section";

export default function TvShows() {
  return (
    <>
      <Head>
        <title>MNTv - TV Shows</title>
      </Head>
      <Header />
      <Section name="TV Shows" />
    </>
  )
}