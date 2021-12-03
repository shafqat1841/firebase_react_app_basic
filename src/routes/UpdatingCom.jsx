import { useState, useEffect } from "react";
import { updateDoc, getDoc } from "firebase/firestore";

import InputCom from "../components/InputCom";
import ButtonCom from "../components/ButtonCom";
import MarginCom from "../components/MarginCom";

const UpdatingCom = ({ settingUpdating, documentRef }) => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		getDoc(documentRef).then((doc) => {
			setLastName(doc.data().name);
		});
	}, [documentRef]);

	return (
		<>
			<InputCom
				initialValue={lastName}
				onChange={(value) => {
					setName(value);
				}}
			/>
			<MarginCom marginning="1rem 0 0 0">
				<ButtonCom
					title="update"
					onClick={() => {
						updateDoc(documentRef, name ? { name: name } : { name: lastName });
						settingUpdating(false);
					}}
				/>
			</MarginCom>
		</>
	);
};

export default UpdatingCom;
