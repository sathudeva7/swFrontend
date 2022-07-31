import React, {useEffect,useState} from 'react';
import notification from './circle.png'
import iconMail from './icon-mail.png';
import './menuNotification.css'

export const MenuNotification = ({notifications_count}) => {
  return (
	  <div className='notification-container'>
	    <img src={notification} className='icon-badge' ></img>
		<span className='notification_count'>{notifications_count}</span>
		<img src={iconMail} className='icon-mail' ></img>
      </div>
	)
}