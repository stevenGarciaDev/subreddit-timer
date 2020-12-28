import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('Hero Section', () => {
  test.each([['SHOW ME THE BEST TIME'], ['Heat Map']])(
    '%s link points to the search page',
    (textUsedForLink) => {
      const { history } = setup('/');
      const button = screen.getByRole('link', { name: textUsedForLink });

      userEvent.click(button);

      expect(
        screen.getByRole('heading', { name: /search/i }),
      ).toBeInTheDocument();
      expect(history.location.pathname).toBe('/search/javascript');
    },
  );
});
