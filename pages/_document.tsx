import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ru'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@400&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
