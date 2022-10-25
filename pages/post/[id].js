import React from 'react';
import Head from 'next/head';

import hello from '../../services/app/hello';
import PostComponent from '../../components/posts';

const Post = ({ postData }) => {
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
      <PostComponent postData={postData} />
    </>
  );
};

export async function getStaticProps(query) {
  const response = await hello({
    method: 'GET',
    url: `/post/${query.params.id}`,
  });

  return {
    props: {
      postData: response,
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export default Post;
