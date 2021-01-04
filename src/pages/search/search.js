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
} from './search.styles';
import LoadingSpinner from '../../components/loading-spinner';
import getSubredditPosts from '../../services/subredditService';

const Search = ({ history }) => {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    history.push(`${subreddit}`);
  };

  const getPosts = async () => {
    const subredditPosts = await getSubredditPosts(subreddit);
    setPosts(subredditPosts);
    setStatus('resolved');
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
      <div>
        {status !== 'resolved' ? <LoadingSpinner />
          : <div>Resolved</div> }
      </div>
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
