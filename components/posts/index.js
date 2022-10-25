import React from 'react';
import * as Containers from './post.containers';

import { Text, Spacer } from '../UI';

import Comments from '../comments';
import CommentsProvider from '../comments/comments.context';

const PostComponent = ({ postData }) => {
  return (
    <Containers.PostContainer>
      <Spacer t={[5]} b={[2]} x={[2]}>
        <Containers.PostContentContainer>
          <Text size={['h4']} weight="b">
            <h1>{postData.title}</h1>
          </Text>
          <Spacer y={[3]} />
          <Text size={['rg']} lineHeight="md">
            {postData.content}
          </Text>
          <Spacer y={[3, 5]} />
          <CommentsProvider
            postId={postData._id}
            postCreatedAt={postData.createdAt}
          >
            <Comments />
          </CommentsProvider>
        </Containers.PostContentContainer>
      </Spacer>
    </Containers.PostContainer>
  );
};

export default PostComponent;
