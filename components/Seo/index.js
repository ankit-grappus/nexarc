import Head from 'next/head'

export default function Helmet({ title, metaContent }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaContent} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.nexarc.in/" />
    </Head>
  )
}