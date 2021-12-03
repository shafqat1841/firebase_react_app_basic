import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const UpdatingUser = ({ docRefId }) => {
	const { setUpdatingUserDocRef } = UserUseContext();

	let navigate = useNavigate();
	return (
		<ButtonCom
			title="update"
			onClick={() => {
				setUpdatingUserDocRef(docRefId);
				navigate("/UpdatingUser");
				// let docRef = doc(db, "users", user.id);
				// setDocumentRef(docRef);
				// setUpdating(true);
			}}
		/>
	);
};

export default UpdatingUser;
