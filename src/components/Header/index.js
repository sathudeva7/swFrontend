import React, {useContext, useEffect,useState} from 'react';
import { CreateButton } from './CreateButton';

import {useLocation} from "react-router-dom";
import './header.css'
import { Search } from './Search';
import { Tab } from './Tab';
import { Title } from './Title';

export const Header = () => {

  return (
	  <div className='header-container'>
		  <Title title={localStorage.getItem('headerTitle') ? localStorage.getItem('headerTitle') : 'Home'} />
		  
		  {localStorage.getItem('headerTitle') == 'Teams' ? 
		  <>
		  <CreateButton text="Create New Team" />
		  <Tab />
		  <Search text="Search team name..." />
		  </>:''}
		  { localStorage.getItem('headerTitle') == 'Campaign'?
		  <>
		  <CreateButton text="Create New Campaign" />
		  <Tab />
		  <Search text="Search campaign name..." />
		  </>:''}
	  </div>
  )
}