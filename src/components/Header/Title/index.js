import React, {useEffect,useState} from 'react';
import iconCompany from '../../SideNav/icon-teams.png'
import './title.css'

export const Title = ({title}) => {
  return (
	  <div className='title-container'>
		  <img src={iconCompany} className='icon-company'></img>
		  <span className='title-span'>{title}</span>
	  </div>
  )
}