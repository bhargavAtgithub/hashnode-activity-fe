import React from 'react';
import Head from 'next/head';

import hello from '../services/app/hello';

import Activities from '../components/activities';

const Activity = ({ activities }) => {
  console.log(activities);
  return (
    <>
      <Head>
        <title>Micro Hashnode</title>
        <meta
          name="description"
          content="An assignment to display all the activities of a user on hashnode(POC)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Activities activities={activities} />
    </>
  );
};

export async function getServerSideProps(_context) {
  try {
    const response = await hello('GET', '/activities');

    return {
      props: {
        activities: response,
      },
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default Activity;
