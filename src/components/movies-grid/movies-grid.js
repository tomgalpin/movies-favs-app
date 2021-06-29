import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { StyledMoviesGrid } from 'components/movies-grid/styled-movies-grid';
import EmptyMovieFallback from 'assets/images/empty-poster-fallback.svg';
import Movie from 'components/movie/movie';

const MoviesGrid = (props) => {
  console.log(8, props);
  // const imgUrl = process.env.REACT_APP_API_BASE_IMAGE_URL;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const observer = useRef(null);

  useEffect(() => {
    // if (props.initNewSearch) setHasMore(true);

    // getMovies(currPage, props.initNewSearch);
    getMovies(props.getUrl);
    // setCurrPage((prev) => prev + 1);
  }, [props.getUrl]);

  const observerRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (currPage < totalPages) {
            getMovies(currPage, false);
            setHasMore(true);
            setCurrPage((prev) => prev + 1);
          } else {
            setHasMore(false);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  const getMovies = async (getUrl) => {
    // const pageNum = initNewSearch ? 1 : page;
    const url = `${props.getUrl}`;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await axios.get(url).then((response) => {
      console.log(54, response);
      const moviesList = response.data.Search;
      // const moviesList = initNewSearch
      //   ? response.data.results
      //   : [...movies, ...response.data.results];

      setMovies(moviesList);
      // setTotalPages(response.data.total_pages);
      setIsLoading(false);
    });
  };

  const renderMovies = (movies) => {
    return movies.map((item, index) => {
      return <Movie key={index} poster={item.Poster} title={item.Title} />;
    });
  };

  return (
    <StyledMoviesGrid data-testid="movies-grid">
      {renderMovies(movies)}
      <div>{isLoading && 'Loading Movies......'}</div>
      <div ref={observerRef} />
    </StyledMoviesGrid>
  );
};

export default MoviesGrid;
