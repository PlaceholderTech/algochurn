import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}

          <meta charset="UTF-8" />

          <meta
            name="keywords"
            content="algorithms, algochurn, interview preparation, competitive, revision, compile and run, practice"
          />
          <meta
            name="description"
            content="Revise and practice interview algorithms and programs on the go. Algochurn is your go to last moment preparation place for technical interviews and coding practice."
          />
          <meta
            name="subject"
            content="Algorithms, Data Structures, interview preparation and practice"
          />
          <meta name="copyright" content="Algochurn" />
          <meta name="language" content="EN" />
          <meta name="og:title" content="Algochurn" />
          <meta name="og:type" content="development" />
          <meta name="og:url" content="http://www.algochurn.com/" />

          <meta name="og:site_name" content="Algochurn" />
          <meta
            name="og:description"
            content="Revise and practice interview algorithms and programs on the go. Algochurn is your go to last moment preparation place for technical interviews and coding practice."
          />
          <meta name="og:email" content="contact@theplaceholdertech.tech" />
          <meta name="og:phone_number" content="9587738861" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
