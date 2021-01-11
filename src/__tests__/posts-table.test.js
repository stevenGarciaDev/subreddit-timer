import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PostsTable from '../components/posts-table';
import postsData from '../__mocks__/posts-table-data.json';

describe('Posts Table', () => {
  it('Display the posts in table with the correct links', () => {
    render(
      <BrowserRouter>
        <PostsTable posts={postsData} />
      </BrowserRouter>,
    );

    const titleLink = screen.getByRole('link', { name: /How to use Google Sheets/i });
    const authorLink = screen.getByRole('link', { name: /J-Kob/i });
    expect(titleLink).toHaveAttribute('href', 'https://www.reddit.com/r/javascript/comments/j6ment/how_to_use_google_sheets_as_a_database/');
    expect(authorLink).toHaveAttribute('href', 'https://www.reddit.com/u/J-Kob');
  });
});
