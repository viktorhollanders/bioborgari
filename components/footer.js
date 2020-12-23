export default function Footer() {
 return (
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
    <a href="mailto:bioborgari@bioborgari.com">bioborgari@bioborgari.com</a>
    <a href="https://goo.gl/maps/7eAyi66XHkNxHxu99" target="_blank">
     Vesturgata 12, 101 Reykjavík
    </a>
   </div>
   <style jsx>{`
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
     .addressAndPhone {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 60px 30px 30px 30px;
     }
    }

    @media screen and (min-width: 800px) {
     .addressAndPhone {
      margin: 90px 100px 60px 100px;
     }
    }

    @media screen and (min-width: 1000px) {
     .addressAndPhone {
      font-size: 24px;
     }
    }
   `}</style>
  </footer>
 )
}
