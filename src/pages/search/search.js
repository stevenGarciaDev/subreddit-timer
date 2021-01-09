import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Headline } from '../../components/hero-section/hero-section.styles';
import {
  Container,
  Form,
  Input,
  SubredditLabel,
  SearchButton,
  ErrorMessage,
} from './search.styles';
import LoadingSpinner from '../../components/loading-spinner';
import Heatmap from '../../components/heatmap';
import fetchPaginatedPosts from '../../services/subredditService';

const Search = ({ history }) => {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('pending');
    history.push(`${subreddit}`);
  };

  const getPosts = async () => {
    const subredditPosts = await fetchPaginatedPosts(subreddit);
    setPosts(subredditPosts);
    const updatedStatus = (subredditPosts.length > 0) ? 'resolved' : 'rejected';
    setStatus(updatedStatus);
  };

  useEffect(() => {
    setSubreddit(initialSubreddit);
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSubreddit]);

  return (
    <Container>
      <Headline>Find the best time for a subreddit</Headline>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <SubredditLabel htmlFor="subreddit">r /</SubredditLabel>
        <Input id="subreddit" type="text" value={subreddit} onChange={(e) => setSubreddit(e.target.value)} />
        <SearchButton type="submit">SEARCH</SearchButton>
      </Form>
      <>
        {status === 'rejected' && <ErrorMessage>Unable to fetch data from Reddit API at this time.</ErrorMessage>}
        {status === 'pending' && <LoadingSpinner />}
        {status === 'resolved' && <Heatmap posts={posts} />}
      </>
    </Container>
  );
};

Search.defaultProps = {
  history: {},
};

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Search;
