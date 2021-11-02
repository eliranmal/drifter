import { render } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  const AppComponent = render(<App />);
  expect(AppComponent);
});
