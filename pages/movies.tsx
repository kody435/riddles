import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "../sanity";
import { Collection } from "../typings";
import styles from "../styles/Home.module.css";
import Head from "next/head";

interface Props {
  collections: Collection[];
}

const movies = ({ collections }: Props) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>OCTULUS | Movies</title>
        <meta
          name="description"
          content="WebApp made by Param Patel, to watch Movies, Series and Animes"
        />
        <meta property="og:title" content="Watch Movies, Series and Animes" />
        <meta
          property="og:description"
          content="Only go-to site for watching Movies, Series and Animes"
        />
        <meta property="og:url" content="https://riddles-mocha.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {collections.map((collection) => (
            <Link
              href={`/movies/${collection.slug.current}`}
              className="shadow-lg rounded-lg"
              key=""
            >
              <div className="text-center">
                <Image
                  alt=""
                  className="rounded-lg hover:opacity-75 opacity-100"
                  src={collection.image}
                  loading="lazy"
                  width={150}
                  height={100}
                />
                <h3 className="text-white font-bolder text-md  ">
                  {collection.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default movies;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    *[_type == 'movies']{
      title,
      slug,
      description,
      url,
      image,
      releaseYear
    }
  `;

  const collections = await sanityClient.fetch(query);

  return {
    props: {
      collections,
    },
  };
};
