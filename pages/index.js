import Head from 'next/head'
import Image from 'next/image'
import Nav from './componenets/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tagwalls - Wallhaven API</title>
        <meta name="description" content="This is an api implementation of website wallhaven.cc in nextjs by github.com/looph0le" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav></Nav>
      </div>
   </>
  )
}
