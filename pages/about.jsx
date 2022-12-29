//TODO: crear una pagina about para ir a la ruta del home

import Head from "next/head"
import Link from "next/link"
import Navbar from "../components/Navbar"

import styles from '../styles/Home.module.css'


const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Estas en About
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

export default About
