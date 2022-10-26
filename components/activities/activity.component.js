/**
 *
 * Renders a days activities
 * Display date
 * List of activities on that date.
 *
 */

import React from 'react';
import Link from 'next/link';
import * as Containers from './activity.containers';

import { Spacer, Text } from '../UI';
import { Divider } from './activity.styles';
import { Write, Comment } from '../../icons';

const Activity = ({ activity }) => {
  const date = new Date(activity.date);

  /**
   * Return Icon based on type [WRITE | COMMENT ]
   */
  const IconSwitch = (type) => {
    switch (type) {
      case 'WRITE':
        return <Write />;
      case 'COMMENT':
        return <Comment />;
    }
  };

  /**
   * Return Copy based on type [WRITE | COMMENT ]
   */
  const typeSwitch = (type) => {
    switch (type) {
      case 'WRITE':
        return 'Wrote an article';
      case 'COMMENT':
        return 'Commented';
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
          <Containers.ActivityDetailsContainer
            key={`activity_${index}`}
            data-testid="activity_id"
          >
            <Containers.ActivityTypeContainer>
              <Containers.ActivityIconContainer>
                {IconSwitch(item.type)}
              </Containers.ActivityIconContainer>
              <Spacer x={[1]} />
              <Text
                size={['mi']}
                color={'ACTIVITY'}
                data-testid="activity_type"
              >
                {typeSwitch(item.type)}
              </Text>
            </Containers.ActivityTypeContainer>
            <Spacer y={[0.5]} />
            <Link
              href={`/post/${item.postId}${
                item.type == 'COMMENT' ? `#${item.commentId}` : ''
              }`}
              passHref
            >
              <a target={'_blank'}>
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
