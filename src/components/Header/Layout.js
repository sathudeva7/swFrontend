import React from 'react'
import { Title } from './Title';


const Layout = (props) => {
  return (
    <div>
		  <Title title={localStorage.getItem('headerTitle') ? localStorage.getItem('headerTitle') : 'Home'} />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;