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
              <div className='flex flex-col text-center h-screen w-screen'>
                  <div className='pb-6 text-3xl md:text-4xl font-extralight pt-6'>
                    <Link href="/">
                      <h1 className='0'>The <span className='font-extrabold'>OCTULUS</span></h1>
                    </Link>
                  </div>
                  <div className='flex md:flex-row flex-col items-center height-screen place-content-center w-screen h-screen justify-evenly'>
                    <Link href="/movies" className='flex p-2 hover:bg-white  rounded-3xl '>
                        <h2 className='text-5xl p-4 font-extrabold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-teal-400'>Movies</h2>
                    </Link>
                  </div>
            </div>
        </main>
    </div>
  )
}

export default Home