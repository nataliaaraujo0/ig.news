import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    princeId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.princeId} />

        </section>

        <img src="/images/avatar.png" alt="viking" />

      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1JyPT8F9rYny3aLO6teoV9m4', {

  })

  const product = {
    princeId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {

    props: {
      product,
    }

  }

}
