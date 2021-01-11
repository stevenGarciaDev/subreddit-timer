/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  Container,
  Title,
  Table,
  TableRow,
  TableData,
  TableLink,
  Column,
} from './posts-table.styles';

const getLinkTextToDisplay = (text, maxLength) => {
  if (text.length > maxLength) {
    const lengthOfElipsis = 3;
    const shortenedText = text.slice(0, maxLength - lengthOfElipsis);
    return `${shortenedText}...`;
  }
  return text;
};

const getTimeOfPost = (createdAtUtc) => {
  const milliseconds = 1000;
  const dateOfPost = new Date(createdAtUtc * milliseconds);
  return dateOfPost;
};

const getTimeToDisplay = (createdAtUtc) => {
  const dateOfPost = getTimeOfPost(createdAtUtc);
  return dayjs(dateOfPost).format('hh:mmA');
};

const sortPostsByDate = (posts) => {
  if (posts.length === 0) return posts;
  return posts.sort((a, b) => {
    const a_date = getTimeOfPost(a.data.created_utc);
    const b_date = getTimeOfPost(b.data.created_utc);
    return a_date.getMinutes() - b_date.getMinutes();
  });
};

const PostsTable = ({ posts }) => {
  const lengthOfTitleColumn = 373;
  const lengthOfTimePostedColumn = 114;
  const lengthOfScoreColumn = 63;
  const lengthOfCommentsColumn = 103;
  const lengthOfAuthorColumn = 129;
  const maxLengthForTitle = 50;
  const maxLengthForAuthor = 12;

  const sortedPosts = sortPostsByDate(posts);
  return (
    <Container>
      <Title>Posts</Title>
      <Table>
        <colgroup>
          <Column width={lengthOfTitleColumn} />
          <Column width={lengthOfTimePostedColumn} />
          <Column width={lengthOfScoreColumn} />
          <Column width={lengthOfCommentsColumn} />
          <Column width={lengthOfAuthorColumn} />
        </colgroup>
        <tbody>
          <TableRow>
            <TableData><strong>Time</strong></TableData>
            <TableData><strong>Time Posted</strong></TableData>
            <TableData><strong>Score</strong></TableData>
            <TableData><strong>Comments</strong></TableData>
            <TableData><strong>Author</strong></TableData>
          </TableRow>
          {sortedPosts.length > 0 && sortedPosts.map((post) => {
            const {
              id, title, created_utc, score, num_comments, author, permalink,
            } = post.data;
            return (
              <TableRow key={id}>
                <TableData>
                  <TableLink as="a" target="_blank" href={`http://reddit.com${permalink}`}>
                    {getLinkTextToDisplay(title, maxLengthForTitle)}
                  </TableLink>
                </TableData>
                <TableData>{getTimeToDisplay(created_utc)}</TableData>
                <TableData>{score}</TableData>
                <TableData>{num_comments}</TableData>
                <TableData>
                  <TableLink as="a" target="_blank" href={`http://reddit.com/user/${author}`}>
                    {getLinkTextToDisplay(author, maxLengthForAuthor)}
                  </TableLink>
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

PostsTable.defaultProps = {
  posts: [],
};

PostsTable.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.shape({
      author: PropTypes.string,
      id: PropTypes.string,
      banned_at_utc: PropTypes.number,
      score: PropTypes.number,
      title: PropTypes.title,
      permalink: PropTypes.string,
    }),
  })),
};

export default PostsTable;