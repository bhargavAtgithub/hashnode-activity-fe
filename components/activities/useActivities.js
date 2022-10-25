import { useContext } from 'react';

import { ActivitiesContext } from './activities.context';

const useActivities = () => {
  const activities = useContext(ActivitiesContext);

  return activities;
};

export default useActivities;
