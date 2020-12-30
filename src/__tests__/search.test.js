import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
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

describe('Search page', () => {
  it('Displays the route parameter as the value for the input field', () => {
    setup('/search/reactjs');

    const subredditInput = screen.getByLabelText('r /');

    expect(subredditInput.value).toEqual('reactjs');
  });

  it('Successfully updates URL route parameter when user clicks the search button', () => {
    const { history } = setup('/search/javascript');

    const subredditInput = screen.getByLabelText('r /');
    fireEvent.change(subredditInput, { target: { value: 'reactjs' } });

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    expect(history.location.pathname).toEqual('/search/reactjs');
  });
});
