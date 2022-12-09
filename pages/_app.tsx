import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useLayoutEffect, useState } from "react";
import { Loader } from "../components/Loader";
import {motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleTransitionEnd = () => {
    const root = document.getElementById("__next");
    const loader = document.getElementById("loader");
    root?.removeChild(loader!);
  };

  useLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 1400);
  }, []);

  const router = useRouter();

  return (
    <>
      <Loader onTransitionEnd={handleTransitionEnd} isLoading={isLoading} />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.75 }}
          variants={
            {
              initialState: {
                opacity: 0,
                clipPath :"Polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath :"Polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              },
              exitState: {
                opacity: 0,
                clipPath :"Polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }
          }
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}