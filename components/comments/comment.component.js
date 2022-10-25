import React from 'react';

import * as Containers from './comments.containers';
import { Text, Spacer } from '../UI';

const Comment = ({ data }) => {
  const date = new Date(data.createdAt);

  return (
    <>
      <Containers.CommentContainer id={data._id}>
        <Text>{data.content}</Text>
        <Spacer />
        <Text size={['sm']} color="ACTIVITY">
          {date.toLocaleString('default', {
            month: 'short',
          })}{' '}
          {date.getDate()}
        </Text>
      </Containers.CommentContainer>
      <Spacer />
    </>
  );
};

export default Comment;
