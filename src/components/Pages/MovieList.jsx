export const MovieList = ({ details }) => {
  if (!details) {
    return null;
  }
  const getYear = () => new Date(release_date).getFullYear();
  const { id, poster_path, title, overview, genres, popularity, release_date } =
    details;
  return (
    <div key={id} style={{ display: 'flex' }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${poster_path}`}
      />
      <div style={{ margin: '20px' }}>
        <h3>
          {title}({getYear()})
        </h3>

        <p>User Score: {Math.round(parseInt(popularity)/10)}%</p>
        <h5>Owerview</h5>
        {overview}
        <h5>Genres</h5>
        {genres.map(item => {
          return <span key={item.id}>{item.name}&nbsp;</span>;
        })}
      </div>
    </div>
  );
};
