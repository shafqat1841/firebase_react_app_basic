import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const UpdatingUser = ({ docRefId }) => {
	const { setUpdatingUserDocRef } = UserUseContext();
	let navigate = useNavigate();

	return (
		<ButtonCom
			forReRendering={`UpdatingUser + ${docRefId} +  ButtonCom`}
			title="update"
			onClick={React.useCallback(() => {
				setUpdatingUserDocRef(docRefId);
				navigate("/UpdatingUser");
			}, [docRefId])}
		/>
	);
};

export default React.memo(UpdatingUser);
