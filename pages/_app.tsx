import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.75 }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "Polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "Polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "Polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          {router.pathname !== "/" && <Header />}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
