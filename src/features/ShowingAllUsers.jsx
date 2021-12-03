import React from "react";

import { UserUseContext } from "../context/UserContext";
import FlexCom from "../components/FlexCom";
import DeletingUser from "./DeletingUser";
import UpdatingUser from "./UpdatingUser";
import GettingUser from "./GettingUser";

const ShowingAllUsers = () => {
	// const [users, setUsers] = React.useState([]);
	const { users } = UserUseContext();
	// a;

	// React.useEffect(() => {
	// 	// getAllUsers(setUsers);
	// 	getAllUsers();
	// }, [getAllUsers]);
	// console.log(users);

	return users.map((user, i) => {
		return (
			<FlexCom
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				key={user.id}
			>
				<h2 key={user.id}>{user.name}</h2>
				<FlexCom
					flexDirection="row"
					alignItems="center"
					justifyContent="center"
				>
					<DeletingUser docRefId={user.id} />
					<UpdatingUser docRefId={user.id} />
					<GettingUser docRefId={user.id} />
				</FlexCom>
			</FlexCom>
		);
	});
};

export default ShowingAllUsers;
