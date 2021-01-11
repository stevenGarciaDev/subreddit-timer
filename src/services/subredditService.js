/* eslint-disable no-console */
const MAX_NUM_OF_POSTS_PER_FETCH = 100;
const TOTAL_OF_POSTS_TO_FETCH = 500;

export default async function fetchPaginatedPosts(subreddit, previousPosts = [], after = '') {
  try {
    let apiUrl = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=${MAX_NUM_OF_POSTS_PER_FETCH}`;
    if (after) {
      apiUrl += `&after=${after}`;
    }
    const response = await fetch(apiUrl);
    const { data: { children: posts, after: newAfter } } = await response.json();
    const combinedPosts = [...previousPosts, ...posts];
    const maxAmountOfPostsToCombine = TOTAL_OF_POSTS_TO_FETCH;
    if (posts.length < 100 || combinedPosts.length >= maxAmountOfPostsToCombine) {
      return combinedPosts;
    }
    return fetchPaginatedPosts(subreddit, combinedPosts, newAfter);
  } catch (error) {
    console.log('Unable to fetch Subreddit Posts', error);
    return [];
  }
}
