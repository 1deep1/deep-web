import type { NextPage } from 'next'
import Link from 'next/link'
import React from "react";
import { Modal } from "reactstrap";
import ModalWindow from '../components/Modal/Modal'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useRouter } from "next/router";
import { motion } from "framer-motion"

const IndexPage:NextPage = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = React.useState(false);

return (
  <Layout title="Главная">
    <main className="container">

      <div className="d-flex justify-content-center flex-column text-center my-6 block-head">
        <div>
            <Image src="/deep1.png" width={241} height={131} />
        </div>
        <h2 className="text-light">Смотри глубже.</h2>
        <p className="text-light">deep - разработка и дизайн.<br />Ваши идеи и мечты с глубиной.</p>
        <div className='row justify-content-center'>
          <div className="col-lg-4">
            <Link href="/works"><button type="button" className="btn btn-main btn-outline-light mb-md-0 mb-3 px-5 py-2">Портфолио</button></Link>
          </div>
          <div className="col-lg-4">
            <button onClick={() => setModalOpen(!modalOpen)} type="button" className="btn btn-main btn-primary px-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Сделать заказ</button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-column text-center my-6 block-head">
        <h2 className="text-light">Проекты:</h2>
        <div className="row align-items-center my-5 d-flex flex-sm-row">
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
            <a href="https://craft.1deep1.ru/">
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
            <a href="#" className="btn btn-link text-white me-1 text-underline-hover disabled">Скоро...</a>
          </div>
        </div>
      </div>
    </main>

    <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
    <ModalWindow/>
    </Modal>
    
  </Layout>
)}

export default IndexPage