import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/MapView', () => () => <div>map</div>);

test('renders info tab content', () => {
  render(<App />);
  const infoElement = screen.getByText(/sample information/i);
  expect(infoElement).toBeInTheDocument();
});
