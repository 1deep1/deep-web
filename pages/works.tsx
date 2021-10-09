import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const WorkPage:NextPage = () => (
  <Layout title="Работы">
    <h1>👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default WorkPage