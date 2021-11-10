import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Aladin&family=Inter:wght@600;700&family=Montserrat&family=Roboto&display=swap"
                        rel="stylesheet" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Aladin&family=Inter:wght@600;700&family=Montserrat&family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}