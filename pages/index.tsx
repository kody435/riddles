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
        <title>The OCTULUS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='mb-14 text-4xl font-extralight pl-4 pt-6 text-white' >The <span className='font-extrabold'>OCTULUS</span></h1>

        <div className={styles.Wrapper}>
          {collections.map(collection => (
            <Link href={`/movies/${collection.slug.current}`} className="m-2">
            <div className={styles.wrap_div}>
                  <img className={styles.img} src={collection.image} />
                  <h2 className={styles.h2}>{collection.title}</h2>
            </div>
            </Link>
          ))}
        </div>
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
      image
    }
  `

  const collections = await sanityClient.fetch(query)

  return {
    props: {
      collections,
    }
  }
}