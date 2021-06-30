import { cleanup, screen } from '@testing-library/react';
import { testRender } from 'test/test-utils';
import { mockPlaylistStore } from 'test/_mockStore';
import Movie from './movie';

describe('<Movie />', () => {
  let movie;

  const defaultProps = {
    id: 'tt1234',
    isPlaylist: false,
    poster: 'https://fakeposter.jpg',
    title: 'Mock Title',
  };

  beforeEach(() => {
    testRender(<Movie {...defaultProps} />, mockPlaylistStore);
    movie = screen.getByTestId('movie');
  });

  afterEach(cleanup);

  it('Renders <Movie /> component correctly', () => {
    expect(movie).toBeInTheDocument();
  });
});
