import { getTrending } from 'api/themoviedb';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending().then(trending => {
      setTrending(trending.results);
    });
  }, []);
  return (
    <div>
      Data
      {trending.map(trend => (
        <div key={trend.id}>{trend.title}</div>
      ))}
    </div>
  );
};

export default Home;
