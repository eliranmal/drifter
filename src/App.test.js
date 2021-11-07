import { render } from '@testing-library/react';

import './test/mocks/matchMedia'
import App from './App';

test('renders app component', () => {
  const AppComponent = render(<App />);
  expect(AppComponent);
});
