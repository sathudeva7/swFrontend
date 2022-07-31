import React, {useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { Campaign } from "./pages/campaign";
import { Home } from "./pages/home";
import { Leads } from "./pages/leads";
import { Reports } from "./pages/reports";
import { Teams } from "./pages/teams";

const AppRoutes = (props) => {
	return (
		<Routes>
			 <Route path="/" exact={true} element={<Home/>}/>
			 <Route path="/teams" exact={true} element={<Teams/>}/>
			 <Route path="/leads" exact={true} element={<Leads/>}/>
			 <Route path="/reports" exact={true} element={<Reports/>}/>
			 <Route path="/campaign" exact={true} element={<Campaign/>}/>
		</Routes>
	)
}
export default AppRoutes;