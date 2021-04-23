import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col, Divider, Space, Layout } from 'antd';
import Typography, {setConfig} from '@namia/typography';
import ArticlesMain from '../components/organisms/articlesMain.js';
import AdArea from '../components/organisms/adArea.js';
import KickersColumn from '../components/organisms/kickersColumn.js';
import KickersHierargy from '../components/organisms/kickersHierargy.js';
import Lists from '../components/organisms/lists.js';

setConfig({
  basic: {
    "breakpoints": ["576px", "768px", "992px", "1200px", "1600px"],
    fontFamily: 'Droid Sans,Helvetica Neue,sans-serif',
    sizes: {
      1: [
        { "breakpointIndex": null, "fontSize": "12px", "lineHeight": "20px" },
        { "breakpointIndex": 0, "fontSize": "12px", "lineHeight": "20px" },
        { "breakpointIndex": 1, "fontSize": "12px", "lineHeight": "20px" },
        { "breakpointIndex": 2, "fontSize": "12px", "lineHeight": "20px" },
        { "breakpointIndex": 3, "fontSize": "14px", "lineHeight": "22px" }
      ],
      2: [
        { "breakpointIndex": null, "fontSize": "14px", "lineHeight": "22px" },
        { "breakpointIndex": 0, "fontSize": "14px", "lineHeight": "22px" },
        { "breakpointIndex": 1, "fontSize": "14px", "lineHeight": "22px" },
        { "breakpointIndex": 2, "fontSize": "14px", "lineHeight": "22px" },
        { "breakpointIndex": 3, "fontSize": "16px", "lineHeight": "24px" }
      ],
      3: [
        { "breakpointIndex": null, "fontSize": "16px", "lineHeight": "24px" },
        { "breakpointIndex": 0, "fontSize": "16px", "lineHeight": "24px" },
        { "breakpointIndex": 1, "fontSize": "16px", "lineHeight": "24px" },
        { "breakpointIndex": 2, "fontSize": "16px", "lineHeight": "24px" },
        { "breakpointIndex": 3, "fontSize": "20px", "lineHeight": "28px" }
      ],
      4: [
        { "breakpointIndex": null, "fontSize": "20px", "lineHeight": "28px" },
        { "breakpointIndex": 0, "fontSize": "20px", "lineHeight": "28px" },
        { "breakpointIndex": 1, "fontSize": "20px", "lineHeight": "28px" },
        { "breakpointIndex": 2, "fontSize": "20px", "lineHeight": "28px" },
        { "breakpointIndex": 3, "fontSize": "24px", "lineHeight": "32px" }
      ],
      5: [
        { "breakpointIndex": null, "fontSize": "24px", "lineHeight": "32px" },
        { "breakpointIndex": 0, "fontSize": "24px", "lineHeight": "32px" },
        { "breakpointIndex": 1, "fontSize": "24px", "lineHeight": "32px" },
        { "breakpointIndex": 2, "fontSize": "24px", "lineHeight": "32px" },
        { "breakpointIndex": 3, "fontSize": "24px", "lineHeight": "32px" }
      ],
      6: [
        { "breakpointIndex": null, "fontSize": "30px", "lineHeight": "38px" },
        { "breakpointIndex": 0, "fontSize": "30px", "lineHeight": "38px" },
        { "breakpointIndex": 1, "fontSize": "30px", "lineHeight": "38px" },
        { "breakpointIndex": 2, "fontSize": "30px", "lineHeight": "38px" },
        { "breakpointIndex": 3, "fontSize": "30px", "lineHeight": "38px" }
      ],
      7: [
        { "breakpointIndex": null, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 0, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 1, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 2, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 3, "fontSize": "38px", "lineHeight": "46px" }
      ],
      8: [
        { "breakpointIndex": null, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 0, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 1, "fontSize": "46px", "lineHeight": "54px" },
        { "breakpointIndex": 2, "fontSize": "46px", "lineHeight": "54px" },
        { "breakpointIndex": 3, "fontSize": "46px", "lineHeight": "54px" }
      ],
      9: [
        { "breakpointIndex": null, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 0, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 1, "fontSize": "46px", "lineHeight": "54px" },
        { "breakpointIndex": 2, "fontSize": "56px", "lineHeight": "64px" },
        { "breakpointIndex": 3, "fontSize": "56px", "lineHeight": "64px" }
      ],
      10: [
        { "breakpointIndex": null, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 0, "fontSize": "38px", "lineHeight": "46px" },
        { "breakpointIndex": 1, "fontSize": "46px", "lineHeight": "54px" },
        { "breakpointIndex": 2, "fontSize": "56px", "lineHeight": "64px" },
        { "breakpointIndex": 3, "fontSize": "68px", "lineHeight": "76px" }
      ],
    },
  },
});

export default function Home() {

  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className={styles.main}>
          <ArticlesMain/>
          <Divider/>
          <AdArea/>
          <Divider/>
          <KickersColumn/>
          <Divider/>
          <KickersHierargy />
          <Divider/>
          <Lists/>
    </main>

    <footer className={styles.footer}>
    </footer>
    </div>
  )
}
