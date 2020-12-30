import React, { useState } from 'react';
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
  const [searchValue, setSearch] = useState(params.subreddit);

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    params.subreddit = searchValue;
    history.push(`${searchValue}`);
  };

  return (
    <Container>
      <Headline>Find the best time for a subreddit</Headline>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <SubredditLabel htmlFor="searchValue">r /</SubredditLabel>
        <Input id="searchValue" type="text" value={searchValue} onChange={(e) => setSearch(e.target.value)} />
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
