import Head from 'next/head';
import styles from '../../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.new</title>
      </Head>
      <h1 className={styles.title}
      >Hello</h1>;
    </>
  )
}
