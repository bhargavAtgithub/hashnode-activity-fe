import React, { createContext, useEffect, useState } from 'react';
import useApp from '../../services/app/useApp';
import hello from '../../services/app/hello';
const defaultState = {};

export const CommentsContext = createContext(defaultState);

const CommentsProvider = ({ children, postId, postCreatedAt }) => {
  const app = useApp();
  const [allComments, setAllComments] = useState([]);
  const [moreComments, setMoreComments] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [rolled, setRolled] = useState(false);

  /**
   * Scroll only on first fetch of the comments.
   */
  useEffect(() => {
    if (allComments.length && !rolled) {
      const hashId = window.location.hash;

      if (hashId) {
        const element = document.getElementById(hashId.slice(1));

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
          setRolled(true);
        }
      }
    }
  }, [allComments, rolled]);

  /**
   * Get the comments till the requested comment is found.
   */
  useEffect(() => {
    let hashId = window.location.hash;
    if (hashId) {
      hashId = hashId.slice(1);
    }
    getAllComments(hashId);
  }, []);

  const toNextPage = () => {
    setCurrentPage((pageNum) => pageNum + 1);
  };

  useEffect(() => {
    if (currentPage > 0) getAllComments();
  }, [currentPage]);

  const getAllComments = async (commentId) => {
    try {
      const postData = {
        postId: postId,
      };
      if (commentId) postData['commentId'] = commentId;
      const nextPage = currentPage;
      const response = await hello({
        method: 'POST',
        url: `/comments?page=${nextPage}`,
        data: postData,
      });

      let combinedComments = [...allComments];
      combinedComments = combinedComments.concat(response.comments);
      setAllComments(combinedComments);
      setMoreComments(response.moreRecords);
    } catch (error) {
      console.log(error);
    }
    return true;
  };

  const postNewComment = async () => {
    
    const newCommentResponse = await app.createRandomCommentForPost(
      postId,
      postCreatedAt
    );

    setAllComments((comments) => [
      ...comments,
      { ...newCommentResponse, createdAt: newCommentResponse.commentDate },
    ]);
  };

  return (
    <CommentsContext.Provider
      value={{
        postNewComment,
        allComments,
        toNextPage,
        moreComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
