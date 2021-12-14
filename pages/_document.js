// import Document from "next/document";
// import { Html, Head, Main, NextScript } from "next/document";
// class AppDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head></Head>
//         <body>
//           <Main></Main>
//           <NextScript></NextScript>
//         </body>
//       </Html>
//     )
//   }
// }
// export default AppDocument

import Document, { Head, Html, Main, NextScript, } from 'next/document';
import Footer from '../components/footer';
import Header from '../components/header';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <!-- Google Tag Manager --> */}
        <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NT8M3DJ');`,
          }}>
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type" : "Organization",
                  "Name" : "nexarc",
                  "URL" : "https://www.nexarc.in",
                  "contactPoint" : [{
                                      "@type" : "ContactPoint",
                                      "telephone" : "+91-902-211-2299",
                                      "contactType" : "Customer Service"
                                    }],
                  "logo" : " https://www.nexarc.in/nexarc/static/appcode/images/NexarcLogo.jpg ",
                  "sameAs" : [  "https://www.facebook.com/nexarcin",
                                "https://www.twitter.com/nexarcin",
                                "https://in.linkedin.com/company/nexarcin",
                                "https://www.instagram.com/nexarcin/",
                                "https://www.youtube.com/c/nexarcin"
                              ]
                  }) 
            }}
        />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NT8M3DJ" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
          {/*  End Google Tag Manager (noscript) */}
          <Main />
          {/* <Header /> */}
          <NextScript />
          {/* <Footer /> */}
          
        </body>
      </Html >
    );
  }
}
export default MyDocument;