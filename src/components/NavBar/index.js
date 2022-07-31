import React, {useContext, useEffect,useState} from 'react';
import { UserContext } from '../../context/UserContext';
import { AppName } from './AppName';
import { BreadCrumb } from './BreadCrumb';
import { MenuNotification } from './MenuNotification';
import { MenuSettings } from './MenuSettings';
import './navBar.css'

export const NavBar = () => {
   const {userDetails} = useContext(UserContext);

  return (
	  <div className='container'>
         <AppName title={"NARWHAL"}/>
		 <BreadCrumb breadcrumbs={localStorage.getItem('headerTitle') ? localStorage.getItem('headerTitle') : 'Home'} />
		 {userDetails && <MenuNotification notifications_count = {userDetails.notifications_count} />}
		 {userDetails && <MenuSettings name={userDetails.name} avatar = {userDetails.avatar} />}
	  </div>
  )
}