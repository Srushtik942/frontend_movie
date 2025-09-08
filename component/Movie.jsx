import useFetch from "../useFetch"
const Movies = ()=>{
   const {data, loading, error} = useFetch("https://backend-movie-aljr.vercel.app/movies");
   console.log(data);
   return(
    <div>
        <ul>
        {data?.map((movie)=>(
            <li key={movie._id}>{movie.title}</li>
        ))}
        </ul>
    </div>
   )

}

export default Movies;