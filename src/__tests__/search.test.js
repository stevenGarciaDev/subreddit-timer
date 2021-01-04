import React from 'react';
import fetchMock from 'jest-fetch-mock';
import {
  screen, render, fireEvent, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../App';
import mockResponse from '../__mocks__/subreddit-reactjs-response.json';

fetchMock.enableMocks();

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
  it('Displays the route parameter as the value for the input field', async () => {
    fetch.mockResponse(JSON.stringify(mockResponse));
    const promise = Promise.resolve();
    setup('/search/reactjs');

    const subredditInput = screen.getByLabelText('r /');

    expect(subredditInput.value).toEqual('reactjs');
    await act(() => promise);
  });

  it('Successfully updates URL route parameter when user clicks the search button', async () => {
    fetch.mockResponse(JSON.stringify(mockResponse));
    const promise = Promise.resolve();
    const { history } = setup('/search/javascript');

    const subredditInput = screen.getByLabelText('r /');
    fireEvent.change(subredditInput, { target: { value: 'reactjs' } });

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    expect(screen.getByText(/find the best time for a subreddit/i)).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/reactjs');
    await act(() => promise);
  });

  it('Displays the loading spinner while waiting for asynchronous response', async () => {
    const promise = Promise.resolve();
    setup('/search/javascript');

    const subredditInput = screen.getByLabelText('r /');
    fireEvent.change(subredditInput, { target: { value: 'reactjs' } });

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    const loadingMessage = await screen.getByTestId('loading-spinner');
    expect(loadingMessage).toBeInTheDocument();
    await act(() => promise);
  });

  it('Loads posts and renders them on the page', async () => {
    fetch.mockResponse(JSON.stringify(mockResponse));
    setup('/search/javascript');
    const promise = Promise.resolve();

    const subredditInput = screen.getByLabelText('r /');
    fireEvent.change(subredditInput, { target: { value: 'reactjs' } });

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    const loadingMessage = await screen.getByTestId('loading-spinner');
    expect(loadingMessage).toBeInTheDocument();

    expect(await screen.findByText(/resolved/i)).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/reactjs/top.json?t=year&limit=500');
    await act(() => promise);
  });
});
