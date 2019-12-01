import React from 'react'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <title>Norske -ere-verb</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div>
      <h1 className='title'>Velkommen til ereverb.no!</h1>
      <p className='description'>
        Har du reparert noe i det siste?
      </p>

      <div className='row'>
        <a href='/lista' className='card'>
          <h3>Lista &rarr;</h3>
          <p>Se den fullstendige lista over -ere-verb.</p>
        </a>
        <a
          href='https://github.com/flyrev/ereverb.no/issues/new?assignees=&labels=&template=nytt--ere-verb.md&title=Forslag+til+-ere-verb%3A+'
          className='card'
        >
          <h3>Send inn ord &rarr;</h3>
          <p>Har du et -ere-verb som ikke er med? Send oss et tips på GitHub, eller send det direkte på epost til flyrev@gmail.com. </p>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
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
        max-width: 880px;
        margin: 80px auto 40px;
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
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Index
