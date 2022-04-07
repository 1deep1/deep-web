import React from "react";
import Layout from "../components/Layout";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

import client from '../contentful/index'
import { ICardFields, ICard } from "../contentful"
import { GetStaticProps } from "next";

export default function Card({card}: {card: ICard[]}) {
    return (
        <Layout title="Карточка">
            <main className="container">

                <div className="row">
                    <div className="col-10 col-md-5 d-flex row justify-content-center m-auto">
                            <p className="card-text-sm">Привет, меня зовут Егор. <br /> Рад знакомству! <br /> 
                                Являюсь опытным веб-разработчиком.
                            </p>
                            <div className="d-flex justify-content-center">
                                <div className="me-2 any-link"><Link href="https://github.com/1deep1"><Image src="/git.png" alt="Telegram" width={50} height={50} /></Link></div>
                                <div className="me-2 any-link"><Link href="https://www.hackerrank.com/egor_grachev_ma1"><Image src="/hack.png" alt="Telegram" width={50} height={50} /></Link></div>
                                <div className="me-2 any-link"><Link href="https://t.me/deep0D"><Image src="/tg.png" alt="Telegram" width={50} height={50} /></Link></div>
                                <div className="mx-2 any-link"><Link href="mailto:mail@1deep1.ru"><Image src="/mail.png" alt="Mail" width={50} height={50} /></Link></div>
                                <div className="mx-2 any-link"><Link href="tel:+79959058003"><Image src="/phone.png" alt="Phone" width={50} height={50} /></Link></div>
                            </div>
                            <div className="d-flex justify-content-center m-3">
                                <Link href="/works"><button type="button" className="btn btn-main btn-outline-light mb-md-3 mb-3 px-5 py-2">Портфолио</button></Link>
                            </div>
                    </div>
                    <div className="col-9 m-auto col-md-5">
                        <Image src="/sticker.png" alt="sticker" width={400} height={400} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="timeline">
                            <ul>
                            {card.map(card => {
                            return (
                            <li key={card.sys.id}>
                            <div className="timeline-content">
                                <h2 className="date">{card.fields.date}</h2>
                                <h1>{card.fields.point}</h1>
                                <p>{card.fields.text}</p>
                            </div>
                            </li>
                            )
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </main>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const card = await client.getEntries<ICardFields>({
      content_type: 'card'
    });
  
    return {
      props: {
        card: card.items
      },
      revalidate: 3600
    }
  }