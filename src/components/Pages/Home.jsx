import { getTrending } from 'api/themoviedb';
import React, { useEffect, useState } from 'react';
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
      <Trending trending={trending} />
    </>
  );
};

export default Home;
