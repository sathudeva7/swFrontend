import React, {useContext, useEffect,useState} from 'react';
import iconLogo from "./sw-logo-white.png"
import iconCampaign from "./icon-campaign.png"
import iconTeam from "./icon-teams.png"
import iconHelp from "./icon-help.png"
import iconLeads from "./icon-leads.png"
import iconReports from "./icon-reports.png"
import './sideNav.css';

export const SideNav = () => {

	const handleTitle = (val) => {
        localStorage.setItem("isActive",val);
		localStorage.setItem("headerTitle",val);
	}

	return (
		<div className='sidenav'>
		  <a className={` ${localStorage.getItem('isActive') === "Home" ? 'active' : ''}`} href='/' onClick={() => handleTitle('Home')}><img src={iconLogo} className='img' ></img></a>
		  <a className={` ${localStorage.getItem('isActive') === "Campaign" ? 'active' : ''}`} href='/Campaign' onClick={() => handleTitle('Campaign')}><img src={iconCampaign} className='img' ></img></a>
          <a className={` ${localStorage.getItem('isActive') === "Teams" ? 'active' : ''}`} href='/Teams' onClick={() => handleTitle('Teams')}><img  className='img' src={iconTeam}></img></a>
		  <a className={` ${localStorage.getItem('isActive') === "Leads" ? 'active' : ''}`} href='/Leads' onClick={() => handleTitle('Leads')}><img src={iconLeads} className='img'></img></a>
		  <a className={` ${localStorage.getItem('isActive') === "Reports" ? 'active' : ''}`} href='/Reports' onClick={() => handleTitle('Reports')}><img src={iconReports} className='img'></img></a>
		  <a className={` ${localStorage.getItem('isActive') === "Help" ? 'active' : ''}`} href='/Help' onClick={() => handleTitle('Help')}><img src={iconHelp} className='img help'></img></a>
		</div>
	)
} 