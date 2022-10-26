import React, { useEffect } from 'react';
import Head from 'next/head';

import hello from '../services/app/hello';
import useActivities from '../components/activities/useActivities';
import Activities from '../components/activities';

const Activity = ({ activitiesObj }) => {
  const activities = useActivities();

  useEffect(() => {
    activities.updateActivities(activitiesObj);
  }, [activitiesObj]);

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
      <Activities />
    </>
  );
};

export async function getServerSideProps(_context) {
  try {
    const response = await hello({ method: 'GET', url: '/activities?page=0' });

    return {
      props: {
        activitiesObj: response,
      },
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default Activity;
