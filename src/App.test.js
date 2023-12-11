import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders sgr link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SOLID GROOVE RECORDS/i);
  expect(linkElement).toBeInTheDocument();
});

test('loads sgr image', () => {
  render(<App />);
  const linkElement = screen.getByText(/SOLID GROOVE RECORDS/i);
  expect(linkElement).toBeInTheDocument();
});

test('verify mail icon', () => {
  render(<App />);
  const linkElement = screen.getByText(/SOLID GROOVE RECORDS/i);
  expect(linkElement).toBeInTheDocument();
});