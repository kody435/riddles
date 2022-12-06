/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.main} >
      <Head>
        <title>OCTULUS</title>
        <meta name="description" content="WebApp made by Param Patel, to watch Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          
        <main className={styles.index}>
            <Link href="/"><h1 className='mb-14 text-4xl font-extralight pl-4 pt-6 text-white' >The <span className='font-extrabold'>OCTULUS</span></h1></Link>
              <Link href="/movies">
                  <h2 className='text-2xl font-bolder lg:text-4xl pl-4 text-white'>Movies</h2>
              </Link>
            
              <Link href="/series">
                  <h2 className='text-2xl lg:text-4xl font-bolder pl-4 text-white'>Series</h2>
              </Link>
        </main>
    </div>
  )
}

export default Home