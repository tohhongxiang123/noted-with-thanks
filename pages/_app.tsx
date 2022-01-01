import { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

import 'katex/dist/katex.min.css'

export default function App(props: AppProps) {
  const { Component, pageProps: { session, ...pageProps} } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
