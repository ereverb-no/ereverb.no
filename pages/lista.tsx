import React from 'react'
import Head from 'next/head'
import words from '../public/words.json'

const Index = () => (
  <div>
    <Head>
      <title>Norske -ere-verb</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div>
      <h1 className='title'>Norske -ere-verb</h1>
      <p className='description'>
        Her er lista over -ere-verb vi har samlet inn så langt:
      </p>

      <div>
        {words.map(item =>
          <div className='row'>
            <a href={`https://ordbok.uib.no/perl/ordbok.cgi?OPP=${item.word}`} className='card'>
              <b>{item.word}</b>
            </a>
          </div>
        )}
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
