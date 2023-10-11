import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Open9 | NFT Marketplace Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead