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
          <a href="http://91.121.165.88:8116/stream?1473424110680.mp3" class="demo" style="display: none;"></a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
