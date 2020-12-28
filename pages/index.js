import Prismic from 'prismic-javascript'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { client } from '../prismic-configuration'

function Home(homeResponse) {
 return (
  <div>
   <Head>
    <title>BioBorgari</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
     key="description"
     name="description"
     content="Burgerjoint serving organic meat and veggie burgers, open Wed - Sun 11.30-21.00 closed Mon - Tue, Vesturgata 12 Tel: 5 19 5 19 5."
    />
   </Head>

   <div id="banner">
    <p id="banner__content">{homeResponse.home_page_text}</p>
   </div>

   <Header />

   <section className="orderNow">
    <picture className="background">
     <img src="/images/BUR_001-1x.jpg" alt="image of a burger" />
    </picture>
    <button
     className="button__order"
     data-glf-cuid="c33b7577-b853-4b53-8cbb-91f09d948205"
     data-glf-ruid="72f91acd-ccdd-44c2-980c-09249f02a23f"
    >
     See menu & order
    </button>
    <script
     src="https://www.fbgcdn.com/embedder/js/ewm2.js"
     defer
     async
    ></script>
   </section>

   <section className="content capped">
    <p>
     Organic Burger Joint in Reykjavík promoting sustainability, food
     sovereignty and well-being for our customers and planet. 🌍
    </p>
   </section>

   <Footer />

   <style jsx>{`
    /* Banner */
    #banner {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     padding: 25px;
     background-color: #000;
     display: flex;
     flex-direction: column;
    }
    #banner__content {
     color: #fff;
     text-transform: uppercase;
     font-weight: 500;
     margin: 0 auto;
     max-width: 800px;
    }

    /* Main  */

    .orderNow {
     position: relative;
    }

    .background img {
     width: 100%;
     height: calc(100vh - (20px * 2));
     overflow: hidden;
     object-fit: cover;
    }

    .orderNow button {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     -ms-transform: translate(-50%, -50%);
    }

    .button__order {
     width: 310px;
     font-size: 28px;
     background: #e8994b;
     color: #fff;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     border-radius: 4px;
     padding: 20px 30px;

     border: none;
    }

    .button__order:active,
    .button__order:focus {
     background: #f2993f;
    }

    .button__order:hover {
     background: #f2993f;
     cursor: pointer;
    }

    .content p {
     font-size: 24px;
     line-height: 1.5;
     margin: 90px 0;
    }

    @media screen and (min-width: 600px) {
     .capped {
      padding: 0 19%;
     }
    }

    @media screen and (min-width: 800px) {
     .capped {
      padding: 0 23%;
     }

     header {
      height: 90vh;
     }

     .logo {
      width: 590px;
      height: 133px;
     }

     .content p {
      font-size: 24px;
     }

     .opening-houers {
      font-size: 24px;
     }
    }
   `}</style>
  </div>
 )
}

export async function getStaticProps() {
 const homeResponse = await client.getSingle('homepage')

 return {
  props: {
   homeResponse,
  },
 }
}

export default Home
