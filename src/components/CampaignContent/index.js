import React, {useEffect,useState,useContext} from 'react';
import { CampaignCard } from './CampaignCard';

export const CampaignContent = () => {
  return (
	<div className='row'>
		<div className='column'>
		<CampaignCard />
		</div>
		<div className='column'>
		<CampaignCard />
		</div>
	
	  </div>
  )
}