import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <img src="/images/cristal.png" alt="cristal" />

          <span>Hey, welcome</span>

          <h1>News about medial
            project using <span>JavaScript.</span>
          </h1>

          <p>
            Get acess to all the publications <br />
            <span>for $9.99 month</span>
          </p>

        </section>

        <img src="/images/avatar.png" alt="viking" />

      </main>
    </>
  );
}
