import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainContainer from '@/components/MainContainer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Galleria</title>
                <meta name="keywords" content="Photo, Foto, Picture, Galery"></meta>
                <meta name="description" content="Encontre fotos aqui."></meta>
            </Head>
            <MainContainer>
                <Component {...pageProps} />
            </MainContainer>
        </>
    );
}
