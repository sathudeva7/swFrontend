import React, {useEffect,useState} from 'react';
import './breadCrumb.css'

export const BreadCrumb = ({breadcrumbs}) => {
  return (
	  <div className='breadcrumb-container'>
	    <span className='breadcrumb'>{breadcrumbs}</span>
      </div>
	)
}