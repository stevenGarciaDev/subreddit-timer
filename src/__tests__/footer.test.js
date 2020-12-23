import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Footer', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  it('ooloo.io link contains href to the correct url', () => {
    const link = screen.getByRole('link', { name: 'ooloo.io' });

    expect(link).toHaveAttribute('href', 'https://ooloo.io/employers');
  });

  it('Navigates to the home page when footer sign logo is clicked', () => {
    const logo = screen.getByRole('link', { name: /sign\.svg/i });

    userEvent.click(logo);

    expect(screen.getByRole('heading', { name: 'How it works' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('Terms & Privacy link contains href to the correct url', () => {
    const link = screen.getByRole('link', { name: 'Terms & Privacy' });

    expect(link).toHaveAttribute('href', '/terms');
  });
});
