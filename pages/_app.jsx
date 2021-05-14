import Head from "next/head";
import Default from "../client/layouts/Default";
import "../client/styles/global.scss";
import AuthProvider from "../client/hocs/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Smart Trust - Work smart not hard</title>
      </Head>

      <AuthProvider>
        <Default>
          <Component {...pageProps} />
        </Default>
      </AuthProvider>
    </>
  );
}

export default MyApp;
