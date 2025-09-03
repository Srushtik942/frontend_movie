import useFetch from "../useFetch";

const MovieByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://backend-movie-aljr.vercel.app/movie/${title}`
  );
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching movie</p>;

  return (
    <div>
      {data ? (
        <>
          <h2>Title: {data.title}</h2>
          <p>Director: {data.director}</p>
          <p>Country: {data.country}</p>
          <p>Year:{data.releaseYear}</p>
          <p>Rating: {data.rating}</p>
          <p>Actors:{data.actors.join(", ")}</p>
          <p>Plot: {data.plot}</p>
          <img src={data.posterUrl} alt="Poster Image"/>
        </>
      ) : (
        <p>No movie found</p>
      )}
    </div>
  );
};

export default MovieByTitle;
