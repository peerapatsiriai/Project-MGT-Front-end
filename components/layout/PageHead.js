import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Project-MGT"}
                </title>
            </Head>
        </>
    )
}

export default PageHead