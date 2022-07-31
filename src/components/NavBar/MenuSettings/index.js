import React, {useEffect,useState} from 'react';
import iconDown from './caret down.png';
import './menuSettings.css'

export const MenuSettings = ({name, avatar, notification_count}) => {
  return (
	  <div className='settings-container'>
		<span className='user-name'>Hello, {name}</span>
	    <img src={avatar} className='icon-avatar'></img>
		<img src={iconDown} className='icon-down'></img>
      </div>
	)
}