import { Fragment } from "react";
// import { Fragment, useState } from "react";

import { UserUseContext } from "../context/UserContext";
import FlexCom from "../components/FlexCom";
import DeletingUser from "./DeletingUser";
import UpdatingUser from "./UpdatingUser";
import GettingUser from "./GettingUser";

const ShowingAllUsers = () => {
	const { users } = UserUseContext();

	return users.map((user, i) => {
		return (
			<Fragment key={user.id}>
				<h2>{user.name}</h2>
				<FlexCom
					forReRendering={`ShowingAllUsers + ${user.name} +  Flex`}
					flexDirection="row"
					alignItems="center"
					justifyContent="center"
				>
					<DeletingUser docRefId={user.id} />
					<UpdatingUser docRefId={user.id} />
					<GettingUser docRefId={user.id} />
				</FlexCom>
			</Fragment>
		);
	});
};

export default ShowingAllUsers;
