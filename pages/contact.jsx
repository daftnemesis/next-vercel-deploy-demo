import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from '../styles/Home.module.css'

export default function Contact() {

  return (

    <>
      <Head>
        <title>Contact Page</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Estas en Contact
          </p>
          
          <div className={styles.linkContainer}>
            <p className={styles.link}>
              Ir a <Link href="/">Home</Link>
            </p>
          </div>
          
        </div>
        <Navbar />        
      </main>
    </>

  )

}