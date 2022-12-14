import React, {useEffect,useState} from 'react';
import iconShape from './Shape.png'
import './createButton.css'

export const CreateButton = () => {
  return (
	  <div className='button-container'>
		  <div className='icon-container'><img src={iconShape} className='icon-shape'></img></div>
		  <span className='button-text'>CREATE NEW TEAM</span>
	  </div>
  )
}