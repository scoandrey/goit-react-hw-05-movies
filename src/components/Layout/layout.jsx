import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
