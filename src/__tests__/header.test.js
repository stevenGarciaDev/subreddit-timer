import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Header', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  it('Navigates to the home page when logo is clicked', () => {
    const logo = screen.getByRole('link', { name: /logo\.svg/i });

    userEvent.click(logo);

    expect(screen.getByRole('heading', { name: 'How it works' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  test.each([['Search'], ['How it works'], ['About']])(
    '"%s" link points to the correct page',
    (navLinkText) => {
      const link = screen.getByRole('link', { name: navLinkText });

      userEvent.click(link);

      expect(
        screen.getByRole('heading', { name: navLinkText }),
      ).toBeInTheDocument();
    },
  );
});
