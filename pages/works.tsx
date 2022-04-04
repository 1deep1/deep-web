import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const WorkPage:NextPage = () => (
  <Layout title="Работы">
    <main className="container">
      <h1 className="text-light title-text mb-md-4">Наши работы:</h1>

      <div className="row mb-2">

        <div className="col-md-6">
          <div className="card-work row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Atom.Phys</h3>
              <div className="mb-1 text-muted">Приложение</div>
              <p className="card-text mb-auto">Конструктор атомов для уроков физики и химии курса школы.</p>
              <a href="#" className="stretched-link">Подробнее</a>
            </div>
            <div className="col-auto d-none d-lg-block">
            <Image className="bd-placeholder-img" src="/prj/atom.png" width={250} height={250} />
            </div>
          </div>
        </div>

      </div>

    </main>
  </Layout>
)

export default WorkPage