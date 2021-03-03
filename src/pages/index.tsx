import Head from 'next/head'
import { ToastProvider } from 'react-toast-notifications'
import Footer from '../components/Footer'
import Header from '../components/Header'
import IpsumGenerator from '../components/IpsumGenerator'
import { IpsumContextProvider } from '../contexts/IpsumContext'

import styles from '../styles/pages/Home.module.css'

const Home = () => {
  return (
    <ToastProvider>
      <IpsumContextProvider>
        <div className={styles.container}>
          <Head>
            <title>Lumenês | Um lorem ipsum fenotipicamente eficaz</title>
          </Head>
          <Header />
          <IpsumGenerator />
          <Footer />
        </div>
      </IpsumContextProvider>
    </ToastProvider>
  )
}

export default Home 