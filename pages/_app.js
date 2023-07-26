import '../styles/global.css'
import NextTopLoader from 'nextjs-toploader'

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextTopLoader color='#0070f3'/>
            <Component {...pageProps} />;
        </>
    )
}