import Head from "next/head"

export function MainComp({ children, title } ) {
    return (
        <>
            <Head>
                <title>{title} | deepProject</title>
                <meta name="description" content="deep - feel the depth of thought" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <h1>deep hello!</h1>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}