import { cleanup, screen } from '@testing-library/react';
import { testRender } from 'test/test-utils';
import { mockPlaylistStore } from 'test/_mockStore';
import MoviesGrid from './movies-grid';

describe('<MoviesGrid />', () => {
  let movie, movies;

  const defaultProps = {
    movies: [
      {
        id: 'tt4452',
        isPlaylist: false,
        poster: 'https://fakeposter1.jpg',
        title: 'Mock Title 1',
      },
      {
        id: 'tt1234',
        isPlaylist: false,
        poster: 'https://fakeposter2.jpg',
        title: 'Mock Title 2',
      },
    ],
    isPlaylist: false,
  };

  beforeEach(() => {
    testRender(<MoviesGrid {...defaultProps} />, mockPlaylistStore);
    movie = screen.getByTestId('movies-grid');
    movies = screen.getAllByTestId('movie');
  });

  afterEach(cleanup);

  it('Renders <MoviesGrid /> component correctly', () => {
    expect(movie).toBeInTheDocument();
    expect(movies.length).toBe(2);
  });
});
