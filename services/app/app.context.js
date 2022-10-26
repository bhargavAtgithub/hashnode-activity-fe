import axios from 'axios';
import React, { createContext, useState } from 'react';

export const defaultState = {};

export const AppContext = createContext(defaultState);

import hello from './hello';

import { getRandomDateTimeForPost, getRandomDateForComment } from '../helpers';

export const AppProvider = ({ children }) => {
  const [creatingPost, setCreatingPost] = useState(false);
  const [creatingComment, setCreatingComment] = useState(false);

  const createRandomPost = async () => {
    setCreatingPost(true);
    try {
      const { randomTitleResponse, randomPostResponse } = await hello({
        method: 'GET',
        externalUrl: '/api/getRandomDataForPost',
      });

      if (!randomPostResponse || !randomTitleResponse) {
        throw 'No data received';
      }

      let randomDate = getRandomDateTimeForPost();

      const postObject = {
        title: randomTitleResponse,
        content: randomPostResponse,
        postDate: randomDate,
      };
      const response = await hello({
        method: 'POST',
        url: '/post',
        data: postObject,
      });

      randomDate = randomDate.setHours(0, 0, 0);
      randomDate = new Date(randomDate).toISOString();

      return {
        postId: response.postId,
        title: randomTitleResponse,
        type: 'WRITE',
        date: randomDate,
        _id: response.activityId,
      };
    } catch (error) {
      // TODO: Handle error
      console.log(error);
      throw 'Something went wrong';
    } finally {
      setCreatingPost(false);
    }
  };

  const createRandomCommentForPost = async (postId, postCreatedAt) => {
    setCreatingComment(true);
    try {
      const { randomCommentResponse } = await hello({
        method: 'GET',
        externalUrl: '/api/getRandomDataForComment',
      });

      let randomDate = getRandomDateForComment(postCreatedAt);

      const commentObject = {
        postId,
        content: randomCommentResponse,
        commentDate: randomDate,
      };

      const response = await hello({
        method: 'POST',
        url: '/comment',
        data: commentObject,
      });

      let activityDate = randomDate.setHours(0, 0, 0);
      activityDate = new Date(activityDate).toISOString();

      return {
        postId: response.postId,
        commentId: response.commentId,
        content: randomCommentResponse,
        type: 'COMMENT',
        date: activityDate,
        commentDate: randomDate.toISOString(),
        _id: response.activityId,
      };
    } catch (error) {
      console.log(error);
      throw 'Something went wrong';
    } finally {
      setCreatingComment(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        createRandomPost,
        createRandomCommentForPost,
        creatingPost,
        creatingComment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
