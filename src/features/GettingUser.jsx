import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const GettingUser = ({ docRefId }) => {
	let navigate = useNavigate();

	const { setGettingUserDocRef } = UserUseContext();
	return (
		<ButtonCom
			title="detail"
			onClick={() => {
				setGettingUserDocRef(docRefId);
				navigate("/GettingUser");
				// let docRef = doc(db, "users", user.id);
				// setSingleUserRef(docRef);
				// setGettingSingleUser(true);
				// getDoc(docRef).then((doc) => {
				// 	setSingleUserRef({ ...doc.data(), id: doc.id });
				// });
			}}
		/>
	);
};

export default GettingUser;
