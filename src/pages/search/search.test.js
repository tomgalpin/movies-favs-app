import { cleanup, screen } from '@testing-library/react';
import { testRender } from 'test/test-utils';
import { mockPlaylistStore } from 'test/_mockStore';
import PageSearch from './search';

describe('<PageSearch />', () => {
  let pageSearch;

  beforeEach(() => {
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

    testRender(<PageSearch />, mockPlaylistStore);
    pageSearch = screen.getByTestId('page-search');
  });

  afterEach(cleanup);

  it('Renders <PageSearch /> page correctly', () => {
    expect(pageSearch).toBeInTheDocument();
  });
});
