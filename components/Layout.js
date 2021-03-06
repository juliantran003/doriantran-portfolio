// Imports
import Header from "./Header.js";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>Dorian Tran - Sound Recordist</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta name="theme-color" content="#000000" />

        <meta name="author" content="Dorian Tran" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
