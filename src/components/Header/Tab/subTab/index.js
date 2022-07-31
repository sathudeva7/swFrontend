import React, {useEffect,useState} from 'react';
import './subTab.css'

export const SubTab = ({name}) => {
  return (
		<div className='subTab-container subTab-text'>{name}</div>
    )
}