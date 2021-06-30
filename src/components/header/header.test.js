import { cleanup, screen } from '@testing-library/react';
import { testRender } from 'test/test-utils';
import { mockPlaylistStore } from 'test/_mockStore';
import Header from './header';

describe('<Header />', () => {
  let header;

  const defaultProps = {
    handleSubmit: () => testFunction(),
  };

  const testFunction = () => {
    console.log('test function');
  };

  beforeEach(() => {
    testRender(<Header {...defaultProps} />, mockPlaylistStore);
    header = screen.getByTestId('header');
  });

  afterEach(cleanup);

  it('Renders <Header /> component correctly', () => {
    const h1 = header.querySelector('h1');
    const playlistRoute = screen.getByTestId('route-playlist');
    const searchBar = screen.getByTestId('search-bar');

    expect(header).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(playlistRoute).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
  });
});
