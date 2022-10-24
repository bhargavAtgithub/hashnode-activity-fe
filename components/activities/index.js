/**
 * Display all the activities of the user
 */

import React from 'react';

import * as Containers from './activities.containers';
import Activity from './activity.component';

import { Spacer, Text } from '../UI';

const Activities = ({ activities }) => {
  return (
    <Containers.ActivitiesContainer>
      <Text size={['md']} weight={'md'}>
        Recent activity
      </Text>
      <Spacer y={[2]} />
      {activities.map((item, index) => (
        <Activity activity={item} key={`activity_${index}`} />
      ))}
    </Containers.ActivitiesContainer>
  );
};

export default Activities;
