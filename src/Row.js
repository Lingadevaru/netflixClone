import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
//import movieTrailer from "movie-trailer";
//import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //const [trailerUrl, setTrailerUrl] = useState("");

  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.log(movies);

  //   const opts = {
  //     height: "390",
  //     width: "99%",
  //     playerVars: {
  //       autoplay: 0,
  //     },
  //   };

  //   const handleClick = (movie) => {
  //     // console.table(movie?.title)
  //     if (trailerUrl) {
  //       setTrailerUrl("");
  //     } else {
  //       movieTrailer(movie.name || "")
  //         .then((url) => {
  //           const urlParams = new URLSearchParams(new URL(url).search);
  //           setTrailerUrl(urlParams.get("v"));
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container */}

      {/* Youtube Video */}
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}

      {/* <YouTube videoId="b5YDdTDYoB0" opts={opts} /> */}
    </div>
  );
}

export default Row;
