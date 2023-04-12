/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="h-screen bg-black text-white flex items-center  ">
        {/* Header start */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-32 lg:pt-0 ">
          {/* LEFT header */}
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center mt-12 lg:mt-0">
              <div className="shadow-lg rounded-lg">
                <div className="text-center">
                  <Image
                    alt=""
                    className="rounded-xl"
                    src="https://image.tmdb.org/t/p/w300/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg"
                    loading="lazy"
                    width={300}
                    height={450}
                  />
                  {/* <h3 className="text-white font-bolder text-md ">
                          Fast and Furious 9
                        </h3> 
                    */}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT header */}
          <div className="flex lg:h-screen flex-col items-center justify-center gap-4 mt-5 lg:mt-0 text-black pt-8 bg-emerald-300 lg:pt-0 rounded-none lg:rounded-l-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-center lg:text-left font-bold scrollbar-none mx-0 lg:mx-10 md:mx-5 py-2 md:py-2 lg:py-4">
              Watch your Favourite Movie & TV Shows
            </h1>
            <h3 className="text-center lg:text-left mx-3 lg:mx-10 md:mx-5">
              Explore a vast library of top-rated films and binge-worthy series,
              all at your fingertips. Dive into countless genres and enjoy
              seamless streaming, tailored to your unique taste. Start your next
              adventure in entertainment today.
            </h3>

            <div className="flex flex-row mb-10 lg:mb-0 mt-10">
              <Link
                href="/movies"
                className="flex justify-center items-left text-xl bg-black text-white px-7 py-3 mb-0 lg:mb-5 font-bold rounded-full "
              >
                Play Now
              </Link>
            </div>
          </div>
        </div>
        {/* Header finish */}

        {/* Footer start */}
      </main>
    </div>
  );
};

export default Home;
