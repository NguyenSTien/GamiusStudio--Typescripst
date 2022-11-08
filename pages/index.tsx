import React from 'react';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './home';

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className='relative bg'>
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default index;
