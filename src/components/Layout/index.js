import React from 'react'
import { ActivityFeed } from '../ActivityFeed'
import { Header } from '../Header/index'
import { NavBar } from '../NavBar'
import { SideNav } from '../SideNav'


const Layout = (props) => {
  return (
    <div className={'app'} >
		<NavBar />
        <Header />
		<ActivityFeed />
		<SideNav />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;