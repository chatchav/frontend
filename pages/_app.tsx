import '../styles/globals.css';
import Head from 'next/head'
import { AppProps } from 'next/app'
// import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) =>  (
  <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
