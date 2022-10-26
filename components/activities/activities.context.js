import React, { createContext, useState, useEffect } from 'react';
import hello from '../../services/app/hello';

const defaultState = {};

export const ActivitiesContext = createContext(defaultState);

const ActivitiesProvider = ({ children }) => {
  const [allActivities, setAllActivities] = useState([]);
  const [moreRecords, setMoreRecords] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);

  const updateActivities = (activitiesObj) => {
    const { activities } = activitiesObj;
    setAllActivities([...activities]);
    setMoreRecords(activitiesObj.moreRecords);
  };

  const toNextPage = () => {
    setCurrentPage((pageNum) => pageNum + 1);
  };

  useEffect(() => {
    if (currentPage > 0) getMoreActivities();
  }, [currentPage]);

  const getMoreActivities = async () => {
    try {
      const nextPage = currentPage;
      const response = await hello({
        method: 'GET',
        url: `/activities?page=${nextPage}`,
      });

      let newActivities = [];
      const existingActivities = [...allActivities];

      /**
       * Activities are fetched by sorting using createdAt.
       * Activities are grouped by dates.
       * {
       *  data: <date>,
       *  activities: []
       * }
       *
       * So, If the first group has the same date as the last group in the existing group of activities,
       * merge them.
       *
       * Else just concat.
       *
       */
      if (
        response.activities[0]?.date ===
        existingActivities[existingActivities.length - 1].date
      ) {
        newActivities = [...existingActivities];
        let newActivitiesLength = newActivities.length;

        let lastDateActivities =
          newActivities[newActivities.length - 1].activities;

        lastDateActivities = [
          ...lastDateActivities,
          ...response.activities[0].activities,
        ];

        newActivities[newActivitiesLength - 1].activities = lastDateActivities;
        newActivities = newActivities.concat(response.activities.slice(1));
      } else {
        newActivities = existingActivities.concat(response.activities);
      }

      setAllActivities([...newActivities]);

      if (!response.moreRecords) {
        setMoreRecords(response.moreRecords);
      }
    } catch (error) {
      console.log(error);
    }

    return true;
  };

  useEffect(() => {
    if (recentActivities.length) {
      setTimeout(() => {
        setRecentActivities((allRecentActivities) => {
          return allRecentActivities.slice(1);
        });
      }, 5000);
    }
  }, [recentActivities]);

  /**
   * After a new activity.
   * Insert the new activity into the exisiting activities if the date of the activity is already present.
   * Just to avoid re-loading.
   */
  const insertNewActivity = (activity) => {
    /**
     * To display the newly created post.
     * So that the user will understand which post is created.
     */
    if (activity.type === 'WRITE') {
      let newActivity = {
        date: activity.date,
        activities: [
          {
            postId: activity.postId,
            createdAt: activity.date,
            _id: activity._id,
            title: activity.title,
            type: 'WRITE',
          },
        ],
      };
      let exisitingNewActivities = [...recentActivities, newActivity];
      setRecentActivities(exisitingNewActivities);
    }

    let newActivities = allActivities;
    for (let i = 0; i < newActivities.length; i++) {
      if (activity.date === newActivities[i].date) {
        delete activity.date;
        activity.createdAt = new Date().toISOString();
        newActivities[i].activities.push({
          ...activity,
        });
        break;
      }
    }
    setAllActivities([...newActivities]);
  };

  return (
    <ActivitiesContext.Provider
      value={{
        updateActivities,
        allActivities,
        moreRecords: moreRecords,
        insertNewActivity,
        toNextPage,
        recentActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;
