import Head from 'next/head'

function Home() {
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

    <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=UA-161195296-1"
    />
    <script
     dangerouslySetInnerHTML={{
      __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-161195296-1');
              `,
     }}
    />
   </Head>

   <header>
    <img className="logo" src="/icons/BioBorgari-log.png" alt="logo" />

    <div className="opening-houers">
     <p>Wednesday - Sunday 11:30 - 21:00</p>
     <p>Monday & Tuesday closed</p>
    </div>
   </header>

   <section className="orderNow">
    <picture className="background">
     <img src="/images/BUR_001.jpg" />
    </picture>
    <button
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

   <footer>
    <div className="socialMedia">
     <h2>Find Us</h2>
     <div>
      <a href="https://www.facebook.com/bioborgari/" target="_blank">
       <img src="/icons/facebook.png" />
      </a>
      <a href="https://www.instagram.com/bioborgari/?hl=en" target="_blank">
       <img src="/icons/instagram.png" />
      </a>
      <a href="https://twitter.com/bioborgari" target="_blank">
       <img src="/icons/twitter.png" />
      </a>
     </div>
    </div>
    <div className="addressAndPhone">
     <a href="tel:+3545195195 ">T: 5 19 5 19 5</a>
     <a href="https://goo.gl/maps/7eAyi66XHkNxHxu99" target="_blank">
      Vesturgata 12
     </a>
    </div>
   </footer>

   <style jsx>{`
    /* commomn clasess */

    .capped {
     padding: 0 16px;
    }

    header {
     height: 80vh;

     display: flex;
     align-items: center;
     justify-content: space-between;
     flex-direction: column;
    }

    .logo {
     width: 262px;
     height: 59px;

     margin-top: 30vh;
    }

    .opening-houers {
     margin-bottom: 50px;
    }

    .opening-houers p:first-child {
     font-weight: 700;
    }

    .opening-houers p:last-child {
     font-weight: 300;
     color: #999595;
    }

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

    button {
     width: 310px;
     font-size: 28px;
     background: #e8994b;
     color: #fff;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     border-radius: 4px;
     padding: 20px 30px;

     border: none;
    }

    button:hover,
    button:active,
    button:focus {
     background: #f2993f;
    }

    .content p {
     line-height: 1.5;
     margin: 90px 0;
    }

    .socialMedia h2 {
     margin-bottom: 40px;
    }

    .socialMedia div {
     display: flex;
     flex-direction: row;
     justify-content: center;
    }

    .socialMedia a img {
     height: 40px;
     width: auto;
    }

    .socialMedia a:nth-child(2) {
     margin: 0 40px;
    }

    .addressAndPhone {
     display: flex;
     flex-direction: column;
     margin-top: 60px;
     margin-bottom: 30px;
    }

    .addressAndPhone a {
     margin-bottom: 16px;
    }

    a {
     text-decoration: none;
     color: #000;
    }

    a:hover,
    a:focus,
    a:active {
     courur: pointer;
    }

    @media screen and (min-width: 600px) {
     .capped {
      padding: 0 19%;
     }

     .addressAndPhone {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 60px 30px 30px 30px;
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

     .addressAndPhone {
      font-size: 24px;
      margin: 90px 100px 60px 100px;
     }
    }
   `}</style>

   <style jsx global>{`
    html,
    body {
     padding: 0;
     margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
     text-align: center;
    }

    * {
     box-sizing: border-box;
    }
   `}</style>
  </div>
 )
}

export default Home
