import React, { useContext } from 'react';

import * as Containers from './comments.containers';
import { Text, Button, Spacer } from '../UI';
import Comment from './comment.component';
import CommentLoader from './comment.loader';
import { CommentsContext } from './comments.context';
import useApp from '../../services/app/useApp';
import useAutoLoader from '../autoLoader/useAutoloader';

const Comments = () => {
  const commentsContext = useContext(CommentsContext);
  const app = useApp();
  const { setLoadMoreElement, autoLoad, setAutoLoad } = useAutoLoader(
    commentsContext.toNextPage
  );

  return (
    <Containers.CommentsContainer>
      <Containers.CommentHeaderContainer>
        <Text weight={'b'}>Comments</Text>
        <Button
          title="Add comment"
          varient={2}
          onClick={() => {
            if (!app.creatingComment) {
              commentsContext.postNewComment();
            }
          }}
          isLoading={app.creatingComment}
        />
      </Containers.CommentHeaderContainer>
      <Spacer y={[3]} />
      {commentsContext.allComments.map((comment, index) => {
        return <Comment key={`comment_${index}`} data={comment} />;
      })}
      {commentsContext.moreComments ? (
        autoLoad ? (
          <>
            <CommentLoader ref={setLoadMoreElement} />
            <CommentLoader />
            <CommentLoader />{' '}
          </>
        ) : (
          <Button title="Load more" onClick={() => setAutoLoad(true)} />
        )
      ) : null}
    </Containers.CommentsContainer>
  );
};

export default Comments;
