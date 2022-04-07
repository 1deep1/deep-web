import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { motion } from "framer-motion"
import client from '../../contentful/index'
import { IWorksFields, IWorks } from "../../contentful"

export default function WorkPage({works}: {works: IWorks[]}) {
  
  return (
  <Layout title="Работы" description='Примеры работ.' tags='примеры, шаблоны сайтов'>
    <main className="container">
      <h1 className="text-light title-text mb-md-4">Работы:</h1>

      <div className="row mb-2">

        {works.map(works => {
          return (
            <div key={works.sys.id} className="col-md-6">
            <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                  >
              <div className="card-work row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">{works.fields.name}</h3>
                  <div className="mb-1 text-muted">{works.fields.app}</div>
                  <p className="card-text mb-auto">{works.fields.smallText}</p>
                  <Link href={`works/${works.fields.slug}`}><a className='stretched-link'>Подробнее</a></Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img src={"https:" + works.fields.image?.fields?.file.url} alt="{works.fields.name}" />
                </div>
              </div>
              </motion.div>
            </div>
          )
        })}

      </div>

    </main>
  </Layout>
  )}

export const getStaticProps: GetStaticProps = async () => {
  const works = await client.getEntries<IWorksFields>({
    content_type: 'works'
  });

  return {
    props: {
      works: works.items
    },
    revalidate: 3600
  }
}