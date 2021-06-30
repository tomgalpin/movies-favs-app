import { cleanup, screen } from '@testing-library/react';
import { testRender } from 'test/test-utils';
import { mockPlaylistStore } from 'test/_mockStore';
import PagePlaylist from './playlist';

describe('<PagePlaylist />', () => {
  let pagePlaylist, movies;

  beforeEach(() => {
    testRender(<PagePlaylist />, mockPlaylistStore);
    pagePlaylist = screen.getByTestId('page-playlist');
    movies = screen.getAllByTestId('movie');
  });

  afterEach(cleanup);

  it('Renders <PagePlaylist /> page correctly', () => {
    expect(pagePlaylist).toBeInTheDocument();
    expect(movies.length).toBe(2);
  });
});
