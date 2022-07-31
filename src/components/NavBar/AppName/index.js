import React, {useEffect,useState} from 'react';
import './appName.css'

export const AppName = ({title}) => {
  return (
	  <div className='appName-container'>
	    <span className='appName'>{title}</span>
      </div>
	)
}