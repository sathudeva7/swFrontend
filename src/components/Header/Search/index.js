import React, {useContext, useEffect,useState} from 'react';
import iconSearch from './icon-search.png';
import { UserContext } from '../../../context/UserContext';
import './search.css'

export const Search = ({text}) => {
	const {searchValue, setSearchValue} = useContext(UserContext);

	
  return (
	  <div className='search-container'>
		  <img src={iconSearch} className='icon-search'></img>
		  <input className='search-text' placeholder={text} value={searchValue?searchValue:''} onChange={(e) => setSearchValue(e.target.value)}></input>
	  </div>
  )
}