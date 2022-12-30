import Head from 'next/head'
import React, { FC } from 'react'
import Navbar from '../Navbar'
import styles from './Home.module.css'

type Props = {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({children}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
        <Navbar />
      </main>
    </>
  )
}

export default MainLayout