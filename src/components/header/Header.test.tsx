import { render, screen } from '@testing-library/react';
import Header from './Header.Component';

test('renders learn react link', () => {
  render(<Header text='Hello' />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

