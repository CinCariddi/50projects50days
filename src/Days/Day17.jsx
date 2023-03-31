import "./Day17.css";
import { useState, useEffect } from "react";

export default function Day17() {
    const API_URL =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
    const SEARCH_API =
        'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
    const [movie, setMovie] = useState([]);
    const [image, setImage] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([])
    console.log("search", searchResults);

    async function getMovies() {
        const res = await fetch(API_URL);
        const data = await res.json();
        const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
        const mv = data.results;
        setMovie(data.results);
        let images = [];
        for (let i = 0; i < mv.length; i++) {
        images.push(IMG_PATH + mv[i].poster_path);
        }
        setImage(images);
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (search && search !== "") {
            const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
            const response = await fetch(`${SEARCH_API}${search}`);
            const data = await response.json();
            const busqueda = data.results
            setSearchResults(data.results);

            let images = [];
            for (let i = 0; i < busqueda.length; i++) {
            images.push(IMG_PATH + busqueda[i].poster_path);
            }
            setImage(images);
        } else {
            window.location.reload();
        }
    };

    function getClassByRate(vote) {
        if (vote >= 8) {
        return "green";
        } else if (vote >= 5) {
        return "orange";
        } else {
        return "red";
        }
    }

    useEffect(() => {
        getMovies();
    }, [search]);

    return (
        <div className="contenedorDia17">
        <div className="contenerDay17">
            <form onSubmit={handleOnSubmit}>
            <input
                value={search}
                onChange={handleOnChange}
                type="text"
                id="search"
                className="search"
                placeholder="Search"
            />
            </form>
        </div>
        <main id="main"></main>
            {
                search !== ""
                    ?
                        <div className="movies">
                        {searchResults?.map((result, i) => (
                            <div className="movie">
                                <img src={image[i]} alt="image" />
                                <div className="movie-info">
                                    <h3>{result.original_title}</h3>
                                    <span className={`${getClassByRate(result.vote_average)}`}>
                                        {result.vote_average}
                                    </span>
                                    <div className="overview">
                                        <h3>Overview</h3>
                                        {result.overview}
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    :
                        <div className="movies">
                            {movie?.map((e, index) => (
                            <div className="movie" key={e.id}>
                                <img src={image[index]} alt="image" />
                                <div className="movie-info">
                                <h3>{e.original_title}</h3>
                                <span className={`${getClassByRate(e.vote_average)}`}>
                                    {e.vote_average}
                                </span>
                                <div className="overview">
                                    <h3>Overview</h3>
                                    {e.overview}
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
            }
        {/* <div className="movies">
            {movie?.map((e, index) => (
            <div className="movie" key={e.id}>
                <img src={image[index]} alt="image" />
                <div className="movie-info">
                <h3>{e.original_title}</h3>
                <span className={`${getClassByRate(e.vote_average)}`}>
                    {e.vote_average}
                </span>
                <div className="overview">
                    <h3>Overview</h3>
                    {e.overview}
                </div>
                </div>
            </div>
            ))}
        </div> */}
        </div>
    );
}
