/* eslint-disable no-console */
export default async function fetchPaginatedPosts(subreddit, previousPosts = [], after = '') {
  try {
    let apiUrl = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
    if (after) {
      apiUrl += `&after=${after}`;
    }
    const response = await fetch(apiUrl);
    const { data: { children: posts, after: newAfter } } = await response.json();
    const combinedPosts = [...previousPosts, ...posts];
    const maxAmountOfPostsToCombine = 500;
    if (posts.length < 100 || combinedPosts.length >= maxAmountOfPostsToCombine) {
      return combinedPosts;
    }
    return fetchPaginatedPosts(subreddit, combinedPosts, newAfter);
  } catch (error) {
    console.log('Unable to fetch Subreddit Posts', error);
    return [];
  }
}
