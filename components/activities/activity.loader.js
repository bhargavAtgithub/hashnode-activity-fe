import React, { forwardRef } from 'react';

import * as Containers from './activity.containers';
import { Spacer } from '../UI';
import { Divider } from './activity.styles';

const ActivityLoader = forwardRef((_props, ref) => {
  return (
    <Containers.ActivityContainer ref={ref}>
      <Containers.DateContainer>
        <Divider />
      </Containers.DateContainer>
      <Containers.AllActivitiesContainer>
        <Containers.ActivityDetailsContainer>
          <Containers.ActivityLoaderHeader />
          <Spacer />
          <Containers.ActivityLoaderLine1 />
          <Spacer />
          <Containers.ActivityLoaderLine2 />
        </Containers.ActivityDetailsContainer>
      </Containers.AllActivitiesContainer>
    </Containers.ActivityContainer>
  );
});

ActivityLoader.displayName = 'ActivityLoader';

export default ActivityLoader;
