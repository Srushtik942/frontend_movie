import Movies from "../component/Movie"
import MovieByTitle from "../component/MovieByTitle"

export default function App(){
    return <main>
        <Movies/>
        <MovieByTitle title={"Gully Boy"}/>
    </main>
}