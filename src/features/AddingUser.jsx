import { useState } from "react";
// import { addDoc } from "@firebase/firestore";

// import { colRef } from "../firebase";
import { UserUseContext } from "../context/UserContext";
import InputCom from "../components/InputCom";
import ButtonCom from "../components/ButtonCom";
import MarginCom from "../components/MarginCom";

const AddingRoute = () => {
	const [name, setName] = useState("");
	const { createUser } = UserUseContext();
	const [error, setError] = useState("");

	return (
		<>
			<h1>Add Name</h1>
			{error ? <h4>{error}</h4> : null}
			<InputCom
				initialValue={name}
				onChange={(value) => {
					setName(value);
				}}
			/>
			<MarginCom marginning="1rem 0 0 0">
				<ButtonCom
					title="add"
					onClick={() => {
						if (!name) {
							setError("Name is required");
						} else if (name.length < 4) {
							setError("Name should be more then 3 characters");
						} else {
							createUser(name);
							setError("");
						}
					}}
				/>
			</MarginCom>
		</>
	);
};

export default AddingRoute;
