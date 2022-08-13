import React, {useEffect,useState,useContext} from 'react';
import user from './Rectangle 75.png';
import vector from './Vector.png'
import './campaign-card.css'

export const CampaignCard = () => {
  return (
	    <div className='campaign-card-container'>
		    <img className='campaign-card-image-container' src={user}></img>
	        <div className='campaign-card-type'>
			    <div className='campaign-card-type-text'>
					Private
				</div>
			</div>
			<div className='campaign-card-description-container'>
				<div className='campaign-card-title-container row' style={{margin: '0px 5px'}}>
					<div className='column campaign-card-title-info-container' style={{marginBottom: '0px'}}>
					<div className='campaign-card-title-text'>
						Class Room 1
					</div>
					<div className='campaign-card-date-text'>
					    Created on 3 May 2022
					</div>
					</div>
					<div className='column campaign-card-author-info-container' style={{marginBottom: '0px'}}>
					<div className='campaign-card-author-text'>
                        Prof.Thevda
					</div>
					<div className='campaign-card-author-from-text'>
                        Eng Dept
					</div>
					</div>
				</div>
				<div className='campaign-card-description-text' style={{margin: '0px 5px'}}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				
				</div>
				<button className='campaign-card-attendee-number-container'>
                    <img className='campaign-card-attendee-avatar' src={vector}></img>
					<div className='campaign-card-attendee-number-text'>
						130 Persons
					</div>
				</button>
				<a className='campaign-card-learn-more-text'>
                    Lean More
				</a>
			</div>
	    </div>
  )
}