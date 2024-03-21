import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout({children}) {
  return (
    <>  <Header/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout
