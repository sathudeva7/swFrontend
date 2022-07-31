import React, {useEffect, useState} from "react";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
	const [searchValue, setSearchValue] = useState('');
	const [tabValue, setTabValue] = useState('All');
	const [headerTitle, setHeaderTitle] = useState('Home');
	const [userDetails, setUserDetails] = useState({});
	const [activities, setActivities] = useState([]);
	const [teams, setTeams] = useState([]);

	useEffect(() => {
      fetch('https://sathudeva7.github.io/sathudeva.github.io/Data/api.geojson')
	    .then(res => res.json())
		.then(data => {
		  setUserDetails(data[0].current_user);
		  setActivities(data[0].activities);
		  setTeams(data[0].teams);
		})

	},[])

	return (
		<UserContext.Provider value={{searchValue, setSearchValue, tabValue, setTabValue, headerTitle, setHeaderTitle, userDetails, activities, teams}}>
			{children}
		</UserContext.Provider>
	)
}