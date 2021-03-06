import Head from 'next/head';
import { Divider } from 'antd';
import styles from '../styles/Home.module.css';
import ArticlesMain from '../components/organisms/articlesMain';
import AdArea from '../components/organisms/adArea';
import KickersColumn from '../components/organisms/kickersColumn';
import KickersHierargy from '../components/organisms/kickersHierargy';
import Lists from '../components/organisms/lists';
import Alert from '../components/atoms/Alert';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Alert
          message="Kestotilaukset nyt -20%"
          description="Kun teet kestotilauksen tällä viikolla, saat sen ennätyshalpaan hintaan."
          type="info"
        />
        <ArticlesMain />
        <Divider />
        <AdArea />
        <Divider />
        <KickersColumn />
        <Divider />
        <KickersHierargy />
        <Divider />
        <Lists />
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
