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

const Search = ({ history }) => {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);

  const handleSubmit = (event) => {
    event.preventDefault();
 
    history.push(`${subreddit}`);
  };

  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  return (
    <Container>
      <Headline>Find the best time for a subreddit</Headline>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <SubredditLabel htmlFor="subreddit">r /</SubredditLabel>
        <Input id="subreddit" type="text" value={subreddit} onChange={(e) => setSubreddit(e.target.value)} />
        <SearchButton>SEARCH</SearchButton>
      </Form>
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
