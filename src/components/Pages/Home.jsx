import { getTrending } from 'api/themoviedb';
import React, { Suspense, useEffect, useState } from 'react';
import Trending from '../Trending';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending().then(trending => {
      setTrending(trending.results);
    });
  }, []);
  return (
    <Suspense>
      <Trending trending={trending} />
    </Suspense>
  );
};

export default Home;
