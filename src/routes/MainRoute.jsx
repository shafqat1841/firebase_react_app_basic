import { Routes, Route } from "react-router-dom";
import React from "react";

// import UpdatingCom from "./UpdatingCom";
// import ShowingRoute from "./ShowingRoute";
// import TestingCom from "../test/TestingCom";
import MainPage from "../features/MainPage";
import UpdatingPage from "../features/UpdatingPage";
import GettingPage from "../features/GettingPage";

const MainRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
			<Route path="/UpdatingUser" element={<UpdatingPage />}></Route>
			<Route path="/GettingUser" element={<GettingPage />}></Route>
		</Routes>
	);
};

export default MainRoute;
