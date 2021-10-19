import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.nexarc.in/" />
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
          
          {/* <!--FB Sharing Tags--> */}
          <meta property="og:title" content="Grow, solve, optimize your business | nexarc (a Tata Enterprise)" />
          <meta property="og:description" content="The one-stop B2B digital platform for emerging businesses in India to grow, find opportunities, network and solve key challenges, with trusted applications, solutions and services." />
          <meta property="og:image" content="https://www.nexarc.in/nexarc/static/appcode/images/NexarcLogo.jpg" />
          <meta property="og:url" content="https://www.nexarc.in/" />
          {/* <!-- end fb sharing tags--> */}

          {/* <!--twitter tags--> */}

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Grow, solve, optimize your business | nexarc (a Tata Enterprise)"/>
          <meta name="twitter:description" content="The one-stop B2B digital platform for emerging businesses in India to grow, find opportunities, network and solve key challenges, with trusted applications, solutions and services."/>
          <meta name="twitter:image"  content="https://www.nexarc.in/nexarc/static/appcode/images/NexarcLogo.jpg"/>
          <meta property="og:url" content="https://www.nexarc.in/" />
          {/* <!-- end twitter tags--> */}

          {/* <!-- Google Tag Manager --> */}
            {/* <script>
                {function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              }(window,document,'script','dataLayer',"GTM-NT8M3DJ")};
            </script> */}
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          {/* <!-- Google Tag Manager (noscript) --> */}
          {/* <noscript><iframe  src="https://www.googletagmanager.com/ns.html?id=GTM-NT8M3DJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
      </Html>
    )
  }
}
export default AppDocument