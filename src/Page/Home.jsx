import { getTrending } from 'api/themoviedb';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending().then(resp=>resp.json()).then((trending) => {
      setTrending(trending);
    });
  }, []);
  return (
    <div>Data
      {trending.map(trend => (
        <div>{trend.name}</div>
      ))}
    </div>
  );
};

export default Home;
