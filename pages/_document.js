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
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang='en'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NT8M3DJ" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
          {/*  End Google Tag Manager (noscript) */}
        </body>
      </Html >
    );
  }
}
export default MyDocument;