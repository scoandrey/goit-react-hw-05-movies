import { getTrending } from 'api/themoviedb';
import Container from 'components/Container/Container';
import React, {  useEffect, useState } from 'react';
import Trending from '../../Service/Trending';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending().then(trending => {
      setTrending(trending.results);
    });
  }, []);
  return (
    <Container>
      <Trending trending={trending} />
    </Container>
  );
};

export default Home;
