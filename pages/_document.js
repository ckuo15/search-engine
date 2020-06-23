// ==============================
// ==============================
// ==============================
// === IMPORTS
// ==============================
// ==============================
// ==============================

// === CORE ===
import Document, { Head, Main, NextScript } from "next/document";

// ==============================
// ==============================
// ==============================
// === COMPONENT DEFINITION + EXPORT
// ==============================
// ==============================
// ==============================

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    // make the environment available on the client
    const envScript = `window.ENV = '${process.env.WILD_ENV ||
      "development"}';`;

    return (
      <html lang="en">
        {
          // Base Head
        }
        <Head>
          {
            // === BASE ===
          }
          <meta charSet="utf-8" />
          <meta content="website" property="og:type" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
            name="viewport"
          />



          <link rel="shortcut icon" type="image/png" href="../static/images/tab-logo.png"/>

          {
            // === CUSTOM FONTS
          }
          <link
            href="//fonts.googleapis.com/css?family=Oswald:400,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
          {
            // === NEXT DEFAULT
          }
          <script dangerouslySetInnerHTML={{ __html: envScript }} />
          <script src="home.js"></script>
          <script src="https://kit.fontawesome.com/f391d4e959.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
