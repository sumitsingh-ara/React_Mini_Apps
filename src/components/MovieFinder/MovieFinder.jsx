import { useFetch } from "../../customHooks/useFetch";
import { useState, useEffect, useRef } from "react";
import "./movieFinder.css";
export const MovieFinder = () => {
  const [title, setTitle] = useState("");
  const url =
    title.length > 2
      ? `http://www.omdbapi.com/?s=${title}&apikey=fa8e7543`
      : null;
  const { loading, error, data } = useFetch(url);
  const searchRef = useRef(null);
  useEffect(() => {
    if (loading) return;
    searchRef.current.focus();
  }, [loading]);
  return (
    <>
      {loading ? (
        <img
          className="loader"
          src="https://c.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif"
          alt="Loading"
        ></img>
      ) : (
        <div>
          <h1>Movie Finder App</h1>
          <input
            value={title}
            ref={searchRef}
            type="text"
            placeholder="Enter Movie Name Here"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="movieShow">
            {error
              ? "Error..."
              : data.length > 0
              ? data.map((item) => (
                  <div key={item.imdbID}>
                    <p>
                      <span className="h6">{item.Title}</span>-
                      {2022 - item.Year} years ago
                    </p>
                    <img src={item.Poster} alt="Poster" />
                  </div>
                ))
              : ""}
          </div>
          <div>{!loading&&title.length>2?"Sorry no movies find":"Please give some more hint"}</div>
        </div>
      )}
    </>
  );
};
