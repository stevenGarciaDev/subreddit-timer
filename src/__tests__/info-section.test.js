import React from 'react';
import { screen, render, within } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../App';

const setup = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

describe('Info Section', () => {
  it('Successfully displays How it works and About section', () => {
    setup('/');
    const article = screen.getByRole('article');
    const link = within(article).getByRole('link', { name: 'ooloo.io' });

    expect(link).toHaveAttribute('href', 'https://ooloo.io');
  });

  it('ooloo.io link navigates to the correct url', () => {
    setup('/');
    const article = screen.getByRole('article');
    const link = within(article).getByRole('link', { name: 'ooloo.io' });

    expect(link).toHaveAttribute('href', 'https://ooloo.io');
  });

  it('Employer link navigates to the correct url', () => {
    setup('/');
    const link = screen.getByRole('link', { name: 'Click here for more information' });

    expect(link).toHaveAttribute('href', 'https://ooloo.io/employers');
  });
});
