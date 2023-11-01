import Head from "next/head";

const metadata = {
        title: 'Acerca de nosotros',
    };

export default function Meta() {

    return(
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
        </>
    )
}

