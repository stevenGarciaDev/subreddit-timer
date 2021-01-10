import React from 'react';
import styled from 'styled-components';

const Timezone = styled.div`
    color: #93918f;
    font-size: 14px;
    margin-top: 12px;
    text-align: center;
`;

const UserTimezone = () => (
  <Timezone>
    All times are shown in your timezone:
    <strong>
      {' '}
      {Intl.DateTimeFormat().resolvedOptions().timeZone}
    </strong>
  </Timezone>
);

export default UserTimezone;
