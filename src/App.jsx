import Movies from "../component/Movie"
import MovieByTitle from "../component/MovieByTitle"
import AddMovieForm from "../component/AddMovieForm"

export default function App(){
    return <main>
        <Movies/>
        <MovieByTitle title={"Gully Boy"}/>
        <AddMovieForm/>
    </main>
}