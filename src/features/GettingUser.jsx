import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const GettingUser = ({ docRefId }) => {
	let navigate = useNavigate();

	const { setGettingUserDocRef } = UserUseContext();
	return (
		<ButtonCom
			forReRendering={`GettingUser + ${docRefId} + ButtonCom`}
			title="detail"
			onClick={useCallback(() => {
				setGettingUserDocRef(docRefId);
				navigate("/GettingUser");
			}, [docRefId])}
		/>
	);
};

export default GettingUser;
