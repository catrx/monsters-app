import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('should retrieve monsters & and render search bar', async () => {
  render(<App />);
  const inputElement = await screen.findByTestId('search-bar');

  expect(inputElement).toBeInTheDocument();
});

test('should render a list with the monster Aboleth', async () => {
  render(<App />);
  const inputElement = await screen.findByTestId('search-bar');

  fireEvent.change(inputElement, { target: { value: 'Aboleth' } });

  const rowElementName = await screen.findByText('Aboleth');
  const rowElementCount = await screen.findByText('+ 2 SKILLS | 4 ACTIONS');

  const rows = await screen.findAllByTestId('monster-row');

  expect(rows.length).toBe(1);
  expect(rowElementName).toBeInTheDocument();
  expect(rowElementCount).toBeInTheDocument();
});

test('should render a list with the strongest monster first', async () => {
  render(<App />);
  const inputElement = await screen.findByTestId('search-bar');

  fireEvent.change(inputElement, { target: { value: 'Abo' } });

  const rows = await screen.findAllByTestId('monster-row');

  expect(rows.length).toBe(2);
  expect(rows[0]).toHaveTextContent('Aboli');
  expect(rows[1]).toHaveTextContent('Aboleth');
});

test('should render an error message when monsters are not in the list', async () => {
  render(<App />);
  const inputElement = await screen.findByTestId('search-bar');

  fireEvent.change(inputElement, { target: { value: 'Cristiano' } });

  const toastElement = await screen.findByText(
    'Oups il semble que votre monstre ne soit pas dans notre liste.',
  );

  expect(toastElement).toBeInTheDocument();
});
