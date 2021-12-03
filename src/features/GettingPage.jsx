import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MarginCom from "../components/MarginCom";
import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const GettingPage = () => {
	const { gettingUserDocRef, getUser } = UserUseContext();
	const [user, setUser] = useState();
	const [userLength, setUserLength] = useState("");
	const [userIdLength, setUserIdLength] = useState("");
	let navigate = useNavigate();

	useEffect(() => {
		getUser(gettingUserDocRef, setUser);
		return getUser(gettingUserDocRef, setUser);
	}, [gettingUserDocRef, getUser]);

	useEffect(() => {
		if (user !== undefined) {
			setUserLength(user.name.length);
			setUserIdLength(user.id.length);
		}
	}, [user]);

	return (
		<>
			<h1>User Info</h1>
			<h3>User Name :</h3>
			<h3>{user ? user.name : null}</h3>
			<h4>User Name Length :</h4>
			<h4>{userLength ? userLength : null}</h4>
			<h4>User ID Length :</h4>
			<h4>{userIdLength ? userIdLength : null}</h4>
			<MarginCom marginning="0 0 1rem 0">
				<ButtonCom
					title="Main Page"
					onClick={() => {
						navigate("/");
					}}
				/>
			</MarginCom>
		</>
	);
};

export default GettingPage;
