import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Header from 'components/header/header';
import SearchTitle from 'components/search-title/search-title';
import MoviesGrid from 'components/movies-grid/movies-grid';

const PageSearch = () => {
  const apiKey = 'a73ed059';
  const baseUrl = `https://www.omdbapi.com/?apiKey=${apiKey}`;
  const fastFurious = `${baseUrl}&s=The%20Fast%20and%20the%20Furious`;

  const [currPage, setCurrPage] = useState(1);
  const [hasMoreMovies, setHasMoreMovies] = useState(true);
  const [initNewSearch, setInitNewSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getUrl, setGetUrl] = useState(fastFurious);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const observer = useRef(null);

  useEffect(() => {
    /*
     * Sets state variables and gets movies
     * @param {bool} getUrl
     * @return {function}
     */

    if (initNewSearch) setHasMoreMovies(true);

    getMovies(currPage, initNewSearch);
    setCurrPage((prev) => prev + 1);
  }, [getUrl]);

  const filterForMovies = (list) => {
    /**
     * Returns only movies from list
     * @param {array} list
     * @return {array} result
     */

    let result = [];

    list.forEach((item, index) => {
      if (item.Type === 'movie') {
        result.push({
          title: item.Title,
          poster: item.Poster,
          imdbID: item.imdbID,
        });
      }
    });

    return result;
  };

  const getMovies = async (page, startNewSearch) => {
    /*
     * Gets movies from getUrl
     * Sets state variables
     * @param {int} page
     * @param {bool} startNewSearch
     * @return {function}
     */

    const pageNum = startNewSearch ? 1 : page;
    const url = `${getUrl}&page=${pageNum}`;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await axios.get(url).then((response) => {
      const hasData = response.data.Response === 'True';

      if (hasData) {
        const pages = Math.ceil(response.data.totalResults / 10);
        const filteredMovies = filterForMovies(response.data.Search);
        const moviesList = startNewSearch
          ? filteredMovies
          : [...movies, ...filteredMovies];

        setTotalPages(pages);
        setMovies(moviesList);
      }
    });

    setIsLoading(false);
  };

  const handleSubmit = (e, formValue) => {
    /*
     * Handles sumbit of form and sets state variables
     * @param {obj} e
     * @param {string} formValue
     * @return {function}
     */

    const trimmed = formValue.trim();

    e.preventDefault();
    setInitNewSearch(true);

    if (trimmed.length > 0) {
      const uriEncoded = encodeURIComponent(trimmed);
      const searchUrl = `${baseUrl}&s=${uriEncoded}`;

      setMovies([]);
      setSearchParams(trimmed);
      setGetUrl(searchUrl);
    } else {
      setSearchParams('');
      setCurrPage(1);
      setGetUrl(fastFurious);
    }
  };

  const observerRef = useCallback(
    /*
     * Sets IntersectionObserver and sets state vars when in view
     * @param {bool} isLoading
     * @param {bool} hasMoreMovies
     * @return {function}
     */

    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreMovies) {
          if (currPage <= totalPages) {
            getMovies(currPage, false);
            setHasMoreMovies(true);
            setCurrPage((prev) => prev + 1);
          } else {
            setHasMoreMovies(false);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMoreMovies],
  );

  const renderGrid = () => {
    /**
     * Renders the Movies Grid or an error message
     */

    if (movies.length > 0) {
      return (
        <MoviesGrid movies={movies} isLoading={isLoading} isPlaylist={false} />
      );
    } else if (!isLoading) {
      return <p>There are no movies from this search.</p>;
    }
  };

  return (
    <div data-testid="page-search">
      <Header handleSubmit={handleSubmit} />
      <main>
        <SearchTitle searchParams={searchParams} />
        {renderGrid()}
        <div>{isLoading && 'Loading Movies......'}</div>
        <div ref={observerRef} />
      </main>
    </div>
  );
};

export default PageSearch;
