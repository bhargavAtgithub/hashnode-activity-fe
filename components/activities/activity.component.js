/**
 *
 * Renders a days activities
 * Display date
 * List of activities on that date.
 *
 */

import React from 'react';
import Link from 'next/link';
import * as Containers from './activities.containers';

import { Spacer, Text } from '../UI';
import { Divider } from './activity.styles';
import { Reply, Write } from '../../icons';

const Activity = ({ activity }) => {
  const date = new Date(activity.date);

  /**
   * Return Icon based on type [WRITE | COMMENT | REPLY]
   */
  const IconSwitch = (type) => {
    switch (type) {
      case 'WRITE':
        return <Write />;
      case 'COMMENT':
        return <></>;
      case 'REPLY':
        return <Reply />;
    }
  };

  /**
   * Return Copy based on type [WRITE | COMMENT | REPLY]
   */
  const typeSwitch = (type) => {
    switch (type) {
      case 'WRITE':
        return 'Wrote an article';
      case 'COMMENT':
        return 'Commented';
      case 'REPLY':
        return 'Replied';
    }
  };

  return (
    <Containers.ActivityContainer>
      <Containers.DateContainer>
        <Text size={['mi']} color={'ACTIVITY'}>
          {date.toLocaleString('default', {
            month: 'short',
          })}{' '}
          {date.getDate()}
        </Text>
        <Spacer />
        <Divider />
      </Containers.DateContainer>
      <Containers.AllActivitiesContainer>
        {activity.activities.map((item, index) => (
          <Containers.ActivityDetailsContainer key={`activity_${index}`}>
            <Containers.ActivityTypeContainer>
              <Containers.ActivityIconContainer>
                {IconSwitch(item.type)}
              </Containers.ActivityIconContainer>
              <Spacer x={[1]} />
              <Text size={['mi']} color={'ACTIVITY'}>
                {typeSwitch(item.type)}
              </Text>
            </Containers.ActivityTypeContainer>
            <Spacer y={[0.5]} />
            <Link href={`/post/${item.postId}`} passHref>
              <a>
                <Text weight={'md'} cursor="pointer">
                  {item.title}
                </Text>
              </a>
            </Link>
          </Containers.ActivityDetailsContainer>
        ))}
      </Containers.AllActivitiesContainer>
    </Containers.ActivityContainer>
  );
};

export default Activity;
