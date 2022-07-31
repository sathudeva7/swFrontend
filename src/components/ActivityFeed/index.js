import React, {useContext, useEffect,useState} from 'react';
import './activityFeed.css'
import { UserContext } from '../../context/UserContext';
import { SubActivity } from './subActivity';

export const ActivityFeed = () => {
	const {activities} = useContext(UserContext);

  return (
	  <div className='activity-container'>
		  <div className='activity-title-container'>
			  <span className='activity-title text-bold'>Activity</span> </div>
       {activities.length > 0 && activities.map(activity => {
		   return  <SubActivity name={activity.person.name} avatar={activity.person.avatar} action={activity.action} target={activity.target} created_at={activity.created_at} />
	   })}
	  </div>
  )
}