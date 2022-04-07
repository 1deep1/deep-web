import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import Layout from "../components/Layout";

export default function Error() {
    return(
        <Layout title="404">
            <main className="container">

            <div className="d-flex justify-content-center flex-column text-center my-6 block-head">
            <div>
                <Image src="/deep1.png" width={241} height={131} />
            </div>
            <h2 className="text-light">404</h2>
            <p className="text-light">Похоже ничего не найдено :(</p>
            <div className='row justify-content-center'>
                <div className="col">
                <Link href="/"><button type="button" className="btn btn-main btn-outline-light mb-md-0 mb-3 px-5 py-2">На главную</button></Link>
                </div>
            </div>
            </div>
            </main>
        </Layout>
    )
}