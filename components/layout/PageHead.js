import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
                <title>
                    {headTitle ? headTitle : "Project-MGT"}
                </title>
            </Head>
        </>
    )
}

export default PageHead