import "~/styles/globals.css";

/** @param {import("next/app").AppProps} appProps */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
