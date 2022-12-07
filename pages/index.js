import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fake Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <h2 className={styles.title}>
         Bem vindo a Fake store
        </h2>
        <p></p>
        <div className={styles.grid}>
          <a href="/products" className={styles.card}>
            <h2>Loja Fake</h2>
            <p>Produto da loja</p>
          </a>
       
        </div>
      </main>

      <Footer/>

    </div>
  )
}