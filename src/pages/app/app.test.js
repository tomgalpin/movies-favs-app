import { act, screen } from '@testing-library/react';
import { testRender } from 'test/test-utils';
import { mockWizardStore } from 'components/pages/wizard/_mockStore';
import App from './app';

describe('<App />', () => {
  it('Renders <App /> component correctly', async () => {
    await act(async () => testRender(<App />, mockWizardStore));
    const initialTest = screen.getByText(/Select Release/i);

    expect(initialTest).toBeInTheDocument();
  });
});
