import React, { useState } from 'react';
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

const Search = ({ history, match: { params } }) => {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    params.subreddit = subreddit;
    history.push(`${subreddit}`);
  };

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
  match: {},
};

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      subreddit: PropTypes.string,
    }),
  }),
};

export default Search;
