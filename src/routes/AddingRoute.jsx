import { useState } from "react";
import { addDoc } from "@firebase/firestore";

import { colRef } from "../firebase";
import InputCom from "../components/InputCom";
import ButtonCom from "../components/ButtonCom";

const AddingRoute = () => {
	const [name, setName] = useState("");

	return (
		<>
			<InputCom
				onChange={(value) => {
					setName(value);
				}}
			/>
			<ButtonCom
				title="add"
				onClick={() => {
					addDoc(colRef, { name: name });
				}}
			/>
		</>
	);
};

export default AddingRoute;
