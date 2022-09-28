/* eslint-disable react/prop-types */ 
import {Header} from '../header/Header';

import Footer from '../footer/Footer';
import MobileNavigationBar from '../mobile-navigation/MobileNavigationBar';
import Sticky from '../sticky/Sticky';
import Topbar from '../topbar/Topbar';
import Head from 'next/head';
import React, { Fragment, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { getCustomerThunk } from '../../store/slices/customerSlice';

const AppLayout = ({ navbar, children, title = 'Migobucks' }) => { 
  const [isFixed, setIsFixed] = useState(false);
  const dispatch = useDispatch();
  let mobile;
  if (typeof window !== 'undefined') { 
    mobile= localStorage.getItem('mobile')||9037243199;

  }
    
  dispatch(getCustomerThunk(mobile));

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} />
      </Sticky>

      {navbar && <div className='section-after-sticky'>{navbar}</div>}
      {!navbar ? (
        <div className='section-after-sticky'>{children}</div>
      ) : (
        children
      )}

      <MobileNavigationBar />
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
