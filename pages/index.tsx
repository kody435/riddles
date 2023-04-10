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
      </Head>

      <main className="h-screen bg-white text-black flex items-center ">
        <div className="">
        {/* Header start */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-32 md:pt-0 ">
            {/* LEFT header */}
            <div className="flex items-center justify-center mt-12">
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
                  <h3 className="text-white font-bolder text-md  ">
                    Fast and Furious 9
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT header */}

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-center md:text-left font-bold scrollbar-none">
                Watch your<br></br> Favourite Movies <br></br> & TV Shows
              </h1>
              <h3 className="text-center md:text-left mx-20 text-gray-700 ">
                Explore a vast library of top-rated films and binge-worthy
                series, all at your fingertips. Dive into countless genres and
                enjoy seamless streaming, tailored to your unique taste. Start
                your next adventure in entertainment today.
              </h3>

              <div className="flex flex-row mb-10 mt-5">
                <Link
                  href="/movies"
                  className="flex justify-center items-left text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-90% px-7 py-3 font-bold rounded-full"
                >
                  Play Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Header finish */}


      </main>
    </div>
  );
};

export default Home;
