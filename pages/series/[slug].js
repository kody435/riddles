/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { sanityClient } from '../../sanity'
import { useRouter } from 'next/router'
import React from 'react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const recipeQuery = `*[_type == 'series' && slug.current == $slug][0]{
  title,
  slug,
  description,
  url,
  image,
  releaseDate,
}`;

export default function Post({data}) {
  const { movie } = data;
  const router = useRouter();

  if (router.isFallback) {
    return <div className='text-white text-4xl align-center'>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <h1 className="pl-5 text-3xl pt-8 w-screen mr-2 text-white">
        {movie.title}
      </h1>
      <div className="bg-zinc-800 m-5 rounded-3xl text-white">
        <p className="pt-6 pb-6 pl-4 pr-4 ">
          <span className="font-extrabold">The Storyline</span> :{" "}
          {movie.description}
          <br></br>
          <br></br>
          <span className="font-extrabold">Release Year</span> :{" "}
          {movie.releaseDate}
        </p>
      </div>

      <div className='flex flex-row justify-center w-screen p-5'>
        <Link href="/movies" className='flex p-5 hover:bg-white  rounded-3xl '>
            <h2 className='text-5xl font-extrabold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-l from-amber-500 to-teal-500'>Watch Now!</h2>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "series" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  )

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const movie = await sanityClient.fetch(recipeQuery, { slug });
  return {
    props: {
      data: { movie }
    }
  }
}
