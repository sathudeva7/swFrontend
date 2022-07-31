import React, {useEffect,useState,useContext} from 'react';
import { Card } from './Card';
import { UserContext } from '../../context/UserContext';
import './content.css'

export const Content = () => {
	const {searchValue, tabValue, teams} = useContext(UserContext);
	const [cardLeangth, setCardLength] = useState(1);

	useEffect(() => {
		setCardLength( teams
			.filter((val) => {
			  if(searchValue=="") {
				  return val;
			  } else if (val.name.includes(searchValue.toLowerCase())) {
				  return val;
			  }
			})
			.filter((val) => {
				if(tabValue=="All") {
					return val;
				} else if (tabValue == "Favorite" && val.is_favorited == true) {
					 return val;
				} else if (tabValue == "Archived" && val.is_archived == true) {
				  return val;
			 }
			}).length) 
	},[tabValue,searchValue, cardLeangth,teams])

  return (
	  <div className='content-container'>
           <div className='content-title-container'>
			    <span className='content-title-text'>{tabValue} Teams</span> 
				<span className='content-numbers-text'>Showing {cardLeangth} out of {teams?.length} teams</span>
			</div>
			
			<div className='cards-container'>
                {teams && 

				teams
				  .filter((val) => {
					if(searchValue=="") {
						return val;
					} else if (val.name.includes(searchValue.toLowerCase())) {
						return val;
					}
				  })
				  .filter((val) => {
					  if(tabValue=="All") {
						  return val;
					  } else if (tabValue == "Favorite" && val.is_favorited == true) {
                           return val;
					  } else if (tabValue == "Archived" && val.is_archived == true) {
						return val;
				   }
				  })
				.map(team => (
					<div className='column'>
					    <Card name={team.name} image={team.image} created_at={team.created_at} is_favorited={team.is_favorited} description={team.description} is_archived={team.is_archived} leads_count={team.leads_count} campaigns_count={team.campaigns_count} />
				    </div>
				))
				}
			</div>
      </div>
	)
}