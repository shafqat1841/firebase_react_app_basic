import { Routes, Route } from "react-router-dom";
import React from "react";

import MainPage from "../features/MainPage";
import UpdatingPage from "../features/UpdatingPage";
import GettingPage from "../features/GettingPage";

const MainRoute = () => {
	return (
		// Routes which replaced switch in "react-router-dom" latest version
		// In it we can place single route for single component
		<Routes>
			{/* this is main page which appear when user arrives on the this web */}
			{/* In it we specify the path and the comonent which user sees in he or she arrives on that path on web */}
			<Route path="/" element={<MainPage />}></Route>
			{/* this is updating page in which we can update user name */}
			{/* In it we specify the path and the comonent which user sees in he or she arrives on that path on web */}
			<Route path="/UpdatingUser" element={<UpdatingPage />}></Route>
			{/* this is getting page in which we can see info about a single user */}
			{/* In it we specify the path and the comonent which user sees in he or she arrives on that path on web */}
			<Route path="/GettingUser" element={<GettingPage />}></Route>
		</Routes>
	);
};

export default MainRoute;
