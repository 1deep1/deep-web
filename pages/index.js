import Head from 'next/head'
import Image from 'next/image'
import { MainComp } from '../components/MainComp'

export default function Home() {
  return (
    <MainComp title={'Главная'}>
        <h1>Index</h1>
    </MainComp>
  )
}
