import React, {useEffect,useState} from 'react';
import iconStar from './star default.png';
import iconStarActive from './star active.png';
import iconChat from './icon-conversations-small.png';
import iconContacts from './icon-leads-small.png'
import './card.css'

export const Card = ({image, name, description, campaigns_count, leads_count, is_favorited, is_archived,created_at}) => {
  return (
	  
	  <div className='card-container' style={{backgroundColor: is_archived ? '#EBEEF2':''}}>
            <div className='row'>
			    <div className='column'>
			        <img className='card-avatar' src={image}></img>
				</div>
	            <div className='column'>
					<div>
					    <div className='card-title-text'>{name}</div> 
					    <img className='card-logo-star' src={is_favorited ? iconStarActive : iconStar}></img>
					</div>
					<div className='card-created-text'>{is_archived ? 'Archived on':'Created on'} {created_at}</div>
			    </div>
			</div>
			<div className='row'>
				<div className='card-description'>
					{description}.
				</div>
			</div>
			<div className='row'>
				<div className='card-footer'>
					<div className='icon-footer-container'>
				    <div className='column'>
					    <img className='icon-chat' src={iconChat}></img>
					    <span className='icon-text'>{campaigns_count} Campaigns</span>
					</div>
					<div className='column'>
					    <img className='icon-contact' src={iconContacts}></img>
					    <span className='icon-text'>{leads_count} Leads</span>
					</div>
					</div>
				</div>
			</div>
      </div>
	)
}