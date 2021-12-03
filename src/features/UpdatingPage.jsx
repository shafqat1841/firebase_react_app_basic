import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MarginCom from "../components/MarginCom";
import InputCom from "../components/InputCom";
import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const UpdatingPage = () => {
	let navigate = useNavigate();
	const { updatingUserDocRef, settingUserLastName, updateUser } =
		UserUseContext();

	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		settingUserLastName(updatingUserDocRef, setLastName);
		return settingUserLastName(updatingUserDocRef, setLastName);
	}, [updatingUserDocRef, settingUserLastName]);

	return (
		<>
			<h1>{lastName}</h1>
			<InputCom
				initialValue={lastName}
				onChange={(value) => {
					setName(value);
				}}
			/>
			<MarginCom marginning="1rem 0 0 0">
				<ButtonCom
					title="Update"
					onClick={() => {
						updateUser(updatingUserDocRef, name, lastName);
						navigate("/");
					}}
				/>
			</MarginCom>
		</>
	);
};

export default UpdatingPage;
