// Imports
import "../styles/globals.css";
import "../styles/reset.css";
import "animate.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout.js";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Scroll Animation function usin AOS package
    Aos.init({ duration: 800 });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
