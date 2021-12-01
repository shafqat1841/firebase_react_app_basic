import { useState } from "react";
import { updateDoc } from "firebase/firestore";

import InputCom from "../components/InputCom";
import ButtonCom from "../components/ButtonCom";

const UpdatingCom = ({ settingUpdating, documentRef }) => {
	const [name, setName] = useState("");

	return (
		<div>
			<InputCom
				onChange={(value) => {
					setName(value);
				}}
			/>
			<ButtonCom
				title="update"
				onClick={() => {
					updateDoc(documentRef, { name: name });
					settingUpdating(false);
				}}
			/>
		</div>
	);
};

export default UpdatingCom;
