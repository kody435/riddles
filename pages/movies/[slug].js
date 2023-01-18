/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { sanityClient } from '../../sanity'
import React from 'react';
import styles from '../../styles/Home.module.css'

const recipeQuery = `*[_type == 'movies' && slug.current == $slug][0]{
  title,
  slug,
  description,
  url,
  image,
  releaseDate,
}`;

export default function Post({data}) {
  const { movie } = data;

  return (
    <div className={styles.main}>
      <iframe src={movie.url} className="w-screen h-screen" allowFullScreen />
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
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "movies" && defined(slug.current)]{
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

export async function getServerSideProps({ query }) {
  const db = new SDK({
    contractTxId: "NK6_OUCdQo3RbXMjBFJXIyZPBa4mgeIr_8bwHPCPtp8",
    rpc: "localhost:8080", // your.remote.node:443
  });
  return {
    props: { question: await db.get("Questions", query.id) },
  };
}
