import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>iFM - The Party Station</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Listen Live!" />
        <p className="description">
          Non-stop Hit Music
        </p>
      </main>

      <Footer />
    </div>
  )
}
