import React, {useEffect,useState} from 'react';
import { CampaignContent } from '../../components/CampaignContent';

export const Campaign = () => {
  return (
	<div className='content-container'>
	<div className='content-title-container'>
		<span className='content-title-text'> Campaign</span> 
	</div>
	<div className='cards-container'>

		<CampaignContent />
	</div>
    </div>
  )
}