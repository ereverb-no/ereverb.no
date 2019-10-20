import React from 'react'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <title>Norske -ere-verb</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div>
      <h1 className='title'>Norske -ere-verb</h1>
      <p className='description'>
        Her er lista over verb vi har samlet inn så langt:
      </p>

      <div className='row'>
        <a href='https://ordbok.uib.no/perl/ordbok.cgi?OPP=administrere&ant_bokmaal=5&ant_nynorsk=5&begge=+&ordbok=begge' className='card'>
          <b>Administrere</b>
        </a>
      </div>

      <div className='row'>
        <a href='https://ordbok.uib.no/perl/ordbok.cgi?OPP=organisere&ant_bokmaal=5&ant_nynorsk=5&begge=+&ordbok=begge' className='card'>
          <b>Organisere</b>
        </a>
      </div>

      <div className='row'>
        <a href='https://ordbok.uib.no/perl/ordbok.cgi?OPP=reparere&ant_bokmaal=5&ant_nynorsk=5&begge=+&ordbok=begge' className='card'>
          <b>Reparere</b>
        </a>
      </div>
    </div>

    <style jsx>{`
      .title {
        margin: 0;
        width: 100%;
        padding-top: 40px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 80%;
        margin: 1em auto 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
    `}</style>
  </div>
)

export default Index
