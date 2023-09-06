export const MovieList = ({ details }) => {
  if (!details) {
    return null;
  }
  const { id, poster_path, title, overview, genres } = details;
  return (
    <div key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${poster_path}`}
      />
      <p>{title}</p>
      <p>{overview}</p>
      <p>
        {genres.map(item => {
          return <span key={item.id}>{item.name}&nbsp;</span>;
        })}
      </p>
    </div>
  );
};
