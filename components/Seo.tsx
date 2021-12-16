import Head from 'next/head'

interface iMeta {
    title?: string,
    desc?: string,
}

const initialTitle = "Note"
const initialDescription = ""

const Meta = ({ title=initialTitle, desc=initialDescription }:iMeta) => (
    <Head>
        <title>{title} | DraftBoxe</title>
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={desc} />
        <meta property="og:site_name" content="DraftBoxe" />
        <meta property="og:url" content="draftboxe.netlify.app" />
        <meta name="twitter:card" content={desc} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="DraftBoxe" />
        <meta name="twitter:creator" content="Barnabas Asha" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"/>
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="draftboxe.netlify.app" />
    </Head>
)
export default Meta