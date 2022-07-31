import React, {useContext, useEffect,useState} from 'react';
import { SubTab } from './subTab';
import { UserContext } from '../../../context/UserContext';
import './tab.css'

export const Tab = () => {
	const {tabValue, setTabValue} = useContext(UserContext);

  return (
	  <div className='tab-container'>
		<span className='subTab-container subTab-text' style={tabValue == 'All' ? {color:'#0083E3', borderBottom: '3px solid #0083E3'}:{}} onClick={() =>setTabValue('All')}>All</span> 
		<span className='subTab-container subTab-text' style={tabValue == 'Favorite' ? {color:'#0083E3', borderBottom: '3px solid #0083E3'}:{}} onClick={() =>setTabValue('Favorite')}>Favorites</span> 
		<span className='subTab-container subTab-text' style={tabValue == 'Archived' ? {color:'#0083E3', borderBottom: '3px solid #0083E3'}:{}} onClick={() =>setTabValue('Archived')}>Archived</span> 
	  </div>
  )
}