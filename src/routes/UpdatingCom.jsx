import { useState, useEffect } from "react";
import { updateDoc, getDoc } from "firebase/firestore";

import InputCom from "../components/InputCom";
import ButtonCom from "../components/ButtonCom";

const UpdatingCom = ({ settingUpdating, documentRef }) => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		getDoc(documentRef).then((doc) => {
			setLastName(doc.data().name);
		});
	});

	return (
		<div>
			<InputCom
				initialValue={lastName}
				onChange={(value) => {
					setName(value);
				}}
			/>
			<ButtonCom
				title="update"
				onClick={() => {
					updateDoc(documentRef, name ? { name: name } : { name: lastName });
					settingUpdating(false);
				}}
			/>
		</div>
	);
};

export default UpdatingCom;
