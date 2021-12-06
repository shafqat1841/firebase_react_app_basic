import { useState, useCallback, memo } from "react";

import { UserUseContext } from "../context/UserContext";
import InputCom from "../components/InputCom";
import ButtonCom from "../components/ButtonCom";
import MarginCom from "../components/MarginCom";

const AddingRoute = () => {
	const { createUser } = UserUseContext();
	const [name, setName] = useState("");
	const [error, setError] = useState("");

	return (
		<>
			<h1>Add Name</h1>
			{error ? <h4>{error}</h4> : null}
			<InputCom
				forReRendering={`AddUser + ${name} + InputCom`}
				initialValue={name}
				onChange={useCallback((value) => {
					setName(value);
				}, [])}
			/>
			<MarginCom
				marginning="1rem 0 0 0"
				forReRendering={`AddUser + ${name} + MarginCom`}
			>
				<ButtonCom
					forReRendering={`AddUser + ${name} + ButtonCom`}
					title="add"
					onClick={useCallback(() => {
						if (!name) {
							setError("Name is required");
						} else if (name.length < 3) {
							setError("Name should be more then 2 characters");
						} else {
							createUser(name);
							setError("");
						}
					}, [name])}
				/>
			</MarginCom>
		</>
	);
};

export default memo(AddingRoute);
