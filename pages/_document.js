import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Welcome to Nexarc</title>
          <meta name="description" content="nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#823cff" />
          <meta name="description"
            content="nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes." />
          <meta name="keywords" content="" />
          <meta name="theme-color" content="#823cff" />
          <meta name="msapplication-navbutton-color" content="#823cff" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#823cff" />
          <meta property="og:site_name" content="Nexarc" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Nexarc" />
          <meta property="og:url" content="https://nexarc.grappus.sbtechzone.com/" />
          <meta property="og:image" content="https://nexarc.grappus.sbtechzone.com/static/assets/images/nexarc.png" />
          <meta property="og:image:url" content="https://nexarc.grappus.sbtechzone.com/static/assets/images/nexarc.png" />
          <meta property="og:image:alt" content="Nexarc" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="images/png" />
          <meta property="og:description"
            content="nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes." />
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}
export default AppDocument