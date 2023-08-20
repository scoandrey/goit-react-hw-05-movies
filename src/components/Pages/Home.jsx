import { getTrending } from 'api/themoviedb';
import Header from 'components/Header/Header';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Trending from '../Trending';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending().then(trending => {
      setTrending(trending.results);
    });
  }, []);
  return (
    <>
      <Header />
      <Trending trending={trending} />
      <Outlet />
    </>
  );
};

export default Home;
