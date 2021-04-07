export default function Header({ props }) {
  // console.log(props.data);
  return (
    <div>
      <header>
        <img className="logo" src="/icons/BioBorgari-log.png" alt="logo" />
        <div className="opening-houers">
          <p>Wednesday – Sunday 11:30 – 21:00</p>
          <p>Monday & Tuesday closed</p>
        </div>
      </header>
      <style jsx>{`
        /* Header */

        header {
          height: 90vh;

          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;

          padding-top: 70px;
        }

        .logo {
          width: 262px;
          height: 59px;

          margin-top: 30vh;
        }

        .opening-houers {
          margin-bottom: 50px;
        }

        .opening-houers p {
          margin: 15px 0;
        }

        .opening-houers p:first-child {
          font-weight: 700;
        }

        .opening-houers p:last-child {
          font-weight: 300;
          color: #999595;
        }

        @media screen and (min-width: 800px) {
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
    </div>
  );
}
