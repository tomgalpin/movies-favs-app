import { cleanup, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
// import setupIntersectionObserverMock from 'test/setupIntersectionObserverMock';
import { testRender } from 'test/test-utils';
import { mockPlaylistStore } from 'test/_mockStore';
import App from './app';

describe('<App />', () => {
  beforeEach(() => {
    const history = createMemoryHistory();

    global.IntersectionObserver = class IntersectionObserver {
      disconnect() {
        return null;
      }

      observe() {
        return null;
      }

      takeRecords() {
        return null;
      }

      unobserve() {
        return null;
      }
    };

    testRender(
      <Router history={history}>
        <App />
      </Router>,
      mockPlaylistStore,
    );
  });

  afterEach(cleanup);

  it('Renders <App /> page correctly', () => {
    expect(screen.getByText('Your Playlist: (2)')).toBeInTheDocument();
  });

  it('Navigates to /playlist', () => {
    fireEvent.click(screen.getByText('Your Playlist: (2)'));

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Your Playlist')).toBeInTheDocument();
  });
});
