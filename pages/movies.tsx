/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { NextPage , GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {sanityClient} from '../sanity'
import { Collection } from '../typings'
import styles from '../styles/Home.module.css'

interface Props {
  collections: Collection[]
}

const Home = ({ collections }: Props) => {
  return (
    <div className={styles.main} >
      <Head>
        <title>OCTULUS</title>
        <meta name="description" content="WebApp made by Param Patel, to watch Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/"><h1 className='mb-14 text-4xl font-extralight pl-4 pt-6 text-white' >The <span className='font-extrabold'>OCTULUS</span></h1></Link>
      <h2 className='text-2xl font-extralight pl-4 text-white'>Movies</h2>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () =>
{
  const query = `
    *[_type == 'movies']{
      title,
      slug,
      description,
      url,
      image,
      releaseYear
    }
  `

  const collections = await sanityClient.fetch(query)

  return {
    props: {
      collections,
    }
  }
}