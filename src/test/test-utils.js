import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);

const TestProvider = ({ store, children }) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

export function testRender(ui, store) {
  const importedStore = mockStore(store);
  return render(<TestProvider store={importedStore}>{ui}</TestProvider>);
}
