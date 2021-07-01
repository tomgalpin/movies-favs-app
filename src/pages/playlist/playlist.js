import { useSelector } from 'react-redux';
import MoviesGrid from 'components/movies-grid/movies-grid';
import {
  StyledPagePlaylist,
  StyledFooter,
} from 'pages/playlist/styled-playlist';
import {
  StyledHeader,
  StyledRouterLink,
} from 'components/header/styled-header';

const PagePlaylist = () => {
  const playlistMovies = useSelector((state) => state.playlist.playlist.value);
  const movies = Object.values(playlistMovies);
  const hasMovies = movies.length > 0;

  const renderGrid = () => {
    if (hasMovies) {
      return <MoviesGrid movies={movies} isLoading={false} isPlaylist={true} />;
    } else {
      return <p>Sorry You do not have any movies in your playlist.</p>;
    }
  };

  return (
    <StyledPagePlaylist data-testid="page-playlist">
      <StyledHeader>
        <StyledRouterLink to="/">Home</StyledRouterLink>
        <h1>Your Playlist</h1>
      </StyledHeader>
      <main>{renderGrid()}</main>
      <StyledFooter>
        <p>My favorite color is green.</p>
      </StyledFooter>
    </StyledPagePlaylist>
  );
};

export default PagePlaylist;
