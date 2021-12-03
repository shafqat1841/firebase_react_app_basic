import React from "react";
import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const DeletingUser = ({ docRefId }) => {
	const { deleteUser } = UserUseContext();

	return (
		<ButtonCom
			title="delete"
			onClick={() => {
				console.log("delete");
				console.log(docRefId);
				deleteUser(docRefId);
				// deleteUser(docRef);
			}}
		/>
	);
};

export default DeletingUser;
