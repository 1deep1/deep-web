import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import Head from 'next/head'
import Image from 'next/image'

import { Modal } from "reactstrap";
import ModalWindow from './Modal/Modal';

type Props = {
  children?: ReactNode
  title?: string
}

const linkHover = (
  event: React.MouseEvent<HTMLAnchorElement>
) => {
  event.stopPropagation();

  const heading = event.currentTarget;
  heading.className = "nav-link px-2 text-secondary";
};

const linkWhite = (
  event: React.MouseEvent<HTMLAnchorElement>
) => {
  event.stopPropagation();

  const heading = event.currentTarget;
  heading.className = "nav-link px-2 text-white";
};

const Layout = ({ children, title = 'deep' }: Props) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <Head>
        <title>{title} | deep</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="p-3 bg-dark text-white">
      <div className="container py-3">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h5 className="text-white h4">Collapsed content</h5>
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <Link href="/">
            <a className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4">
            <Image src="/deepLogo.png" width={185} height={80} />
            </a>
          </Link>
  
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/"><a className={router.pathname == "/" ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white"}>Главная</a></Link></li>
            <li><Link href="/works"><a className={router.pathname == "/works" ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white"}>Работы</a></Link></li>
            <li><Link href="/contacts"><a className={router.pathname == "/contacts" ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white"}>Контакты</a></Link></li>
          </ul>
          
          <div className="text-end">
            <button type="button" onClick={() => setModalOpen(!modalOpen)} className="btn btn-outline-light">Сделать заказ!</button>
          </div>
        </div>
      </div>
      </header>
      {children}

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <ModalWindow/>
      </Modal>

      <footer className="p-5 bg-footer text-white">
          <div className="d-flex justify-content-center">
            <p className="mb-0">© deep 2022. Все права защищены. Копирование информации запрещено.</p>
          </div>
      </footer>
    </div>
  )
}

export default Layout