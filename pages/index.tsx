/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>OCTULUS</title>
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

      <main className={styles.index}>
        <div className="flex flex-col h-screen text-center justify-center items-center ">
          <div className="flex justify-center items-center flex-col gap-0 md:flex-row md:gap-52 ">
            <Link
              href="/movies"
              className="flex p-2 hover:bg-white  rounded-3xl "
            >
              <h2 className="text-5xl p-4 font-extrabold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-teal-400">
                MOVIES
              </h2>
            </Link>
            <Link
              href="/series"
              className="flex p-2 hover:bg-white rounded-3xl "
            >
              <h2 className="text-5xl p-4 font-extrabold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
                SERIES
              </h2>
            </Link>
          </div>
          <div className="flex justify-center items-center flex-col gap-40 md:flex-row md:gap-52 ">
            <Link
              href="/request"
              className="flex p-2 rounded-3xl hover:opacity-75"
            >
              <h2 className="text-5xl pt-4 pb-4 px-9 font-semibold lg:text-6xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white rounded-full">
                REQUEST
              </h2>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
