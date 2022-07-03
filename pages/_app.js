// Imports
import "../styles/globals.css";
import "../styles/reset.css";

import Layout from "../components/Layout.js";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
