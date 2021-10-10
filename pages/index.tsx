import type { NextPage } from 'next'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../components/Layout'
import { useRouter } from "next/router";
import { motion } from "framer-motion"

const IndexPage:NextPage = () => {
  const router = useRouter();

return (
  <Layout title="Главная">
    <main className="container">

      <div className="d-flex justify-content-center flex-column text-center my-6 block-head">
        <div>
            <Image src="/deep1.png" width={241} height={131} />
        </div>
        <h2 className="text-light">Смотри глубже.</h2>
        <p className="text-light">deep - разработка, дизайн и больше.<br />
        Пользуйтесь новым <b>deepID</b> для свободного доступа ко всем серивсам.</p>
        <div>
          <button type="button" className="btn btn-main btn-outline-light me-5 px-5 py-2">deepID</button>
          <button type="button" className="btn btn-main btn-primary px-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Сделать заказ</button>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-column text-center my-6 block-head">
        <h2 className="text-light">Севрисы</h2>
        <div className="row align-items-center my-5">
          <div className="col d-flex flex-column">
            <a href="https://atom.novalogy.ru/">
              <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
              >
              <Image src="/prj/atom.png" width={250} height={250} />
              <a className="btn btn-link text-white me-1 text-underline-hover">Atom.Phys</a>
              </motion.div>
            </a>
          </div>
          <div className="col d-flex flex-column">
            <a href="#">
              <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
              >
              <Image src="/prj/mine.png" width={250} height={250} />
              <a className="btn btn-link text-white me-1 text-underline-hover">deepCraft</a>
              </motion.div>
            </a>
          </div>
          <div className="col d-flex flex-column">
            <a href="#" className="disabled">
              <Image src="/prj/shop.png" width={250} height={250} />
            </a>
            <a href="#" className="btn btn-link text-white me-1 text-underline-hover disabled">Shop</a>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </main>
  </Layout>
)}

export default IndexPage