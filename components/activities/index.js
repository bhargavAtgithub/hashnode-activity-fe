/**
 * Display all the activities of the user
 */
import React from 'react';
import useActivities from './useActivities';
import * as Containers from './activity.containers';
import Activity from './activity.component';
import { Divider, ShowMoreButton } from './activity.styles';
import { More } from '../../icons';
import ActivityLoader from './activity.loader';
import useAutoLoader from '../autoLoader/useAutoloader';

import { Spacer, Text } from '../UI';

const Activities = () => {
  const activitiesContext = useActivities();
  const { setLoadMoreElement, autoLoad, setAutoLoad } = useAutoLoader(
    activitiesContext.toNextPage
  );

  return (
    <Containers.ActivitiesContainer>
      <Text size={['md']} weight={'md'}>
        Recent activity
      </Text>
      <Spacer y={[2]} />
      {activitiesContext.allActivities.map((item, index) => (
        <Activity activity={item} key={`activities_${item.date}_${index}`} />
      ))}
      {activitiesContext.moreRecords ? (
        autoLoad ? (
          <>
            <ActivityLoader ref={setLoadMoreElement} />
            <ActivityLoader />
            <ActivityLoader />
            <ActivityLoader />
          </>
        ) : (
          <Containers.ActivityContainer>
            <Containers.DateContainer>
              <Divider />
            </Containers.DateContainer>
            <Containers.ShowMoreContainer>
              <ShowMoreButton
                onClick={(e) => {
                  e.stopPropagation();
                  setAutoLoad(true);
                }}
              >
                <Containers.ShowMoreIconContainer>
                  <More />
                </Containers.ShowMoreIconContainer>
                <Spacer />
                <Text size={['sm']} color={'BUTTON'} cursor="pointer">
                  Show more
                </Text>
              </ShowMoreButton>
            </Containers.ShowMoreContainer>
          </Containers.ActivityContainer>
        )
      ) : null}
    </Containers.ActivitiesContainer>
  );
};

export default Activities;
