import { render, screen } from '@testing-library/react';
import Message from './Message.Component';

test('renders learn react link', () => {
  render(<Message text='Hello' />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

