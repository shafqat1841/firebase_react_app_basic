import React from "react";
import FlexCom from "../components/FlexCom";

import AddingUser from "./AddingUser";
import ShowingAllUsers from "./ShowingAllUsers";

const MainPage = () => {
	return (
		<FlexCom
			marginning="0 0 10vh 0"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<AddingUser />
			<ShowingAllUsers />
		</FlexCom>
	);
};

export default MainPage;
