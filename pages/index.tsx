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
    <div className='max-w-10xl mx-auto flex flex-col min-h-screen pt-5 pb-20 px-10 2xl:p-0 ' >
      <Head>
        <title>The OCTULUS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='mb-14 text-4xl font-extralight text-white' >The <span className='font-extrabold'>OCTULUS</span></h1>

        <div className='Wrapper'>
          {collections.map(collection => (
            <Link href={`/movies/${collection.slug.current}`} className="link">
            <div className='wrap-div'>
                  <img className='' src={collection.image} />
                  <h2 className=''>{collection.title}</h2>
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