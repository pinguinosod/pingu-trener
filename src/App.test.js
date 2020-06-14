import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Pingu Trener title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pingu Trener/i);
  expect(linkElement).toBeInTheDocument();
});
