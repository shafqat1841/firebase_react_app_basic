import { useEffect, useState, useCallback } from "react";
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
		if (updatingUserDocRef) {
			settingUserLastName(updatingUserDocRef, setLastName);
			return settingUserLastName(updatingUserDocRef, setLastName);
		} else {
			let updatingUserDocRef = localStorage.getItem("updatingUserDocRef");
			settingUserLastName(updatingUserDocRef, setLastName);
			return settingUserLastName(updatingUserDocRef, setLastName);
		}
	}, [updatingUserDocRef]);

	return (
		<>
			<h1>{lastName}</h1>
			<InputCom
				forReRendering={`UpdatingPage + ${name + lastName} + InputCom`}
				initialValue={lastName}
				onChange={useCallback(
					(value) => {
						setName(value);
					},
					[name]
				)}
			/>
			<MarginCom
				forReRendering={updatingUserDocRef + name + lastName}
				marginning="1rem 0 0 0"
			>
				<ButtonCom
					forReRendering={`UpdatingPage + ${
						updatingUserDocRef + name + lastName
					} + ButtonCom`}
					title="Update"
					onClick={useCallback(() => {
						if (updatingUserDocRef) {
							updateUser(updatingUserDocRef, name, lastName);
							navigate("/");
						} else {
							let updatingUserDocRef =
								localStorage.getItem("updatingUserDocRef");
							// console.log(updatingUserDocRef, name, lastName);
							updateUser(updatingUserDocRef, name, lastName);
							navigate("/");
							// updateUser(updatingUserDocRef, name, lastName);
						}
					}, [name, lastName])}
				/>
			</MarginCom>
		</>
	);
};

export default UpdatingPage;
