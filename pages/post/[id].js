import React from 'react';
import Head from 'next/head';

const Post = ({ post_data }) => {
  console.log(post_data);

  return (
    <>
      <Head>
        <title>Micro Hashnode </title>
        <meta
          name="description"
          content="An assignment to display all the activities of a user on hashnode(POC)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Post;
