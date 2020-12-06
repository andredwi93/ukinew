import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import AboutHome from './parts/AboutHome'
import Banner from './parts/Banner'
import Navigation from './parts/Navigation'
import PartnerHome from './parts/PartnerHome'
import ProductsHome from './parts/ProductsHome'
import ServiceHome from './parts/ServiceHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>PT. Usaha Kreatif Indonesia</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Navigation />
      <main>
        <Banner />
        <AboutHome />
        <ServiceHome />
        <PartnerHome />
        <ProductsHome />
      </main>
    </>
  )
}
