import React, {useEffect,useState} from 'react';
import './subActivity.css'

export const SubActivity = ({avatar,name,action,created_at, target}) => {

	const modifyAction = (action,target) => {
		switch(action) {
            case 'archived_team':
			   return `archived the team `;
			case 'added_leads':
			   return `added new leads to `;
			case 'increased_quota':
				return `increased `;
		}
		
	}

  return (
	  <div className='sub-activity-container'>
            <img className='avatar-logo' src={avatar}></img>
		    <div className='sub-activity-text'><span className='text-bold'>{name}</span> {modifyAction(action)}<span className='text-bold'>{target}</span>{action == 'increased_quota' ? '\'s quota':''}. 
		        <div className='sub-activity-time'>{created_at}</div>
		    </div>
	  </div>
  )
}