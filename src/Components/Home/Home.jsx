import React from 'react';
import Layout from '../Layout/Layout';
import Banner from '../Banner/Banner';
import Fun from '../Fun/Fun'
import Subscribe from '../Subscribe/Subscribe';
import Destinations from '../Destinations/Destinations';
import Help from '../Help/Help';
import Blog from '../Blog/Blog';

function Home() {
  return (
    <>
    <Layout>
        <Banner></Banner>
        <Fun></Fun>
        <Subscribe></Subscribe>
        <Destinations></Destinations>
        <Help></Help>
        <Blog></Blog>
    </Layout>
    </>
  )
}

export default Home
