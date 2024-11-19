import "@/styles/globals.css";
import "@/styles/icon.css";
import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";


const quicksand = Quicksand({
    subsets: ['latin']
})
const lato = Lato({
    weight:['100', '300'],
    subsets:['latin'],
    variable : '--font-lato',
})
export default function App({Component, pageProps}: AppProps) {

    return (
        <>
            <style jsx global>{`
            `}</style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
