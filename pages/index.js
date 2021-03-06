import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import '../styles/style.scss';
import Showcase from '../components/Showcase';
import Privacy from '../components/Privacy';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Head>
      <title>Whappify - Create Playlists from Whatsapp Chats</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Hero />
    <Showcase />
    <Privacy />
    <Footer />
  </div>
)

export default Home
