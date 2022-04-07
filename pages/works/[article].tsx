import React from "react";
import Layout from "../../components/Layout";
import Image from 'next/image'
import { IWorksFields, IWorks } from "../../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../contentful/index";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Article({works}: {works: IWorks}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Layout title={works?.fields.name} description="Пример работы." tags="примеры сайтов">
            <main className="container">
                <h1 className="text-light title-text">{works?.fields.name}</h1>
                <p className="text-light text-title-under">{works?.fields.app}</p>

                <Slider {...settings}>
                    {works.fields.screen?.map(works => {
                    return (
                    <div key={works.sys.id} className="slider-img">
                    <   img src={"https:" + works.fields.file.url} className="d-block w-100" />
                    </div>
                    )
                    })}
                </Slider>

                <div className="main-text my-5">{documentToReactComponents(works?.fields.description!)}</div>

            </main>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const worksEntries = await client.getEntries<IWorksFields>({
        content_type: 'works',
        select: 'fields.slug'
      });

      return {
          paths: worksEntries.items.map(item => {
              return {
                  params: {
                      article: item.fields.slug
                  }
              }
          }),
          fallback: false
      }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params!.article;
    
    const worksEntries = await client.getEntries<IWorksFields>({
        content_type: 'works',
        limit: 1,
        'fields.slug': slug
      });

      const[works] = worksEntries.items;
  
    return {
      props: {
        works
      },
      revalidate: 3600
    };
  }