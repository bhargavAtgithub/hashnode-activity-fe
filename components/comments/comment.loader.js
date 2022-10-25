import React, { forwardRef } from 'react';

import * as Containers from './comments.containers';
import { Spacer } from '../UI';

const CommentLoader = forwardRef((_props, ref) => {
  return (
    <>
      <Containers.CommentContainer ref={ref}>
        <Containers.CommentLoader />
        <Spacer />
        <Containers.CommentDateLoader />
      </Containers.CommentContainer>
      <Spacer />
    </>
  );
});

CommentLoader.displayName = 'CommentLoader';

export default CommentLoader;
