// import { useState } from 'react';
// import { StyledPlaylist } from 'pages/playlist/styled-playlist';
import {
  StyledHeader,
  StyledRouterLink,
} from 'components/header/styled-header';

const PagePlaylist = () => {
  return (
    <div>
      <StyledHeader data-testid="header">
        <StyledRouterLink to="/">Home</StyledRouterLink>
        <h1>Your Playlist</h1>
      </StyledHeader>
    </div>
  );
};

export default PagePlaylist;
