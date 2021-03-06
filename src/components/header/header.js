import { useSelector } from 'react-redux';
import SearchBar from 'components/search-bar/search-bar';
import {
  StyledHeader,
  StyledRouterLink,
} from 'components/header/styled-header';

const Header = (props) => {
  const playlistCount = useSelector((state) => state.playlist.count.value);

  return (
    <StyledHeader data-testid="header">
      <h1>
        Movies for
        <a href="https://www.fast.co/" target="_blank" rel="noreferrer">
          <span> Fastronauts</span>
        </a>
      </h1>
      <StyledRouterLink to="/playlist" data-testid="route-playlist">
        Your Playlist: ({playlistCount})
      </StyledRouterLink>
      <SearchBar handleSubmit={props.handleSubmit} />
    </StyledHeader>
  );
};

export default Header;
