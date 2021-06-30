import { StyledMoviesGrid } from 'components/movies-grid/styled-movies-grid';
import Movie from 'components/movie/movie';

const MoviesGrid = ({ movies, isPlaylist }) => {
  const renderMovies = () => {
    return movies.map((item, index) => {
      return (
        <Movie
          key={index}
          poster={item.poster}
          title={item.title}
          id={item.imdbID}
          isPlaylist={isPlaylist}
        />
      );
    });
  };

  return (
    <StyledMoviesGrid data-testid="movies-grid">
      {renderMovies()}
    </StyledMoviesGrid>
  );
};

export default MoviesGrid;
