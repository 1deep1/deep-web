import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const ContactsPage:NextPage = () => (
  <Layout title="Контакты">
    <h1>👋👋👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default ContactsPage