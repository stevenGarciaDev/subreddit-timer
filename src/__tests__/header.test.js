import React from 'react';
import { render, screen, within } from '@testing-library/react';
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

describe('Header', () => {
  it('Navigates to the home page when logo is clicked', () => {
    setup('/');
    const logo = screen.getByRole('link', { name: /logo\.svg/i });

    userEvent.click(logo);

    expect(screen.getByRole('heading', { name: 'How it works' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('Search link navigates to the search page when clicked', () => {
    setup('/');
    const link = screen.getByRole('link', { name: 'Search' });

    userEvent.click(link);

    expect(
      screen.getByRole('heading', { name: 'Search' }),
    ).toBeInTheDocument();
  });

  test.each([['How it works'], ['About']])(
    '"%s" anchor tag scrolls to the correct section',
    (navLinkText) => {
      setup('/');
      const nav = screen.getByRole('navigation');
      const link = within(nav).getByRole('link', { name: navLinkText });

      userEvent.click(link);

      expect(
        screen.getByRole('heading', { name: navLinkText }),
      ).toBeInTheDocument();
    },
  );
});
