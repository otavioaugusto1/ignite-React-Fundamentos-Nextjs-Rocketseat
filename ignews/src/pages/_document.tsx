import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    /* aqui é como se fosse o public/index.html de um react 
    normal, só que utilizando tags do Next.js
    */
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                        </Html>
            )
    }
}