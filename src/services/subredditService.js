export default async function getSubredditPosts(subreddit) {
  try {
    let posts = [];
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=500`);
    const { data } = await response.json();
    posts = data.children;
    return posts;
  } catch (error) {
    console.log('Unable to fetch Subreddit Posts', error);
    return [];
  }
}
