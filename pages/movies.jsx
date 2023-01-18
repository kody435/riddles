/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'
import Image from "next/image";
import {sanityClient} from '../sanity'
import styles from '../styles/Home.module.css'


const movies = () => {
  return (
    <div className={styles.main} >
      <Link href="/"><h1 className='mb-14 text-4xl font-extralight pl-4 pt-6 text-white' >The <span className='font-extrabold'>OCTULUS</span></h1></Link>
      
      <main className='container mx-auto py-10 px-4'>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {collections.map(collection => (
            <Link href={`/movies/${collection.slug.current}`} className="shadow-lg rounded-lg">
              <div className="text-center">
                    <Image alt="" className="rounded-lg hover:opacity-75 opacity-100" src={collection.image} loading="lazy" width={150} height={100} />
                    <h2 className="text-white font-bolder text-md  ">{collection.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default movies

export const getServerSideProps = async () =>
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