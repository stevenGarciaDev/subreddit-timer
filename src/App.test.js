import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const navLinkCases = [['Search'], ['How it works'], ['About']];

describe('Header', () => {
  beforeEach(() => {
    render(
      <App />,
    );
  });

  it('App logo link apears on the page', () => {
    expect(
      screen.getByRole('link', { name: /logo/i }),
    ).toBeInTheDocument();
  });

  test.each(navLinkCases)(
    '"%s" link points to the correct page',
    (navLinkText) => {
      const textRegex = new RegExp(navLinkText, 'i');
      const link = screen.getByRole('link', { name: textRegex });

      userEvent.click(link);

      expect(
        screen.getByRole('heading', { name: textRegex }),
      ).toBeInTheDocument();
    },
  );
});
