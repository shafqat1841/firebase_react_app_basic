// two hooks (useState, useCallback) and one (higher order component) are taken from react
import { useState, useCallback, memo } from "react";

// UserUseContext is a function which we use to get things from context api
import { UserUseContext } from "../context/UserContext";

// InputCom component is used to get input from users
import InputCom from "../components/InputCom";

// ButtonCom component is used so that users can click on it and the process procced
import ButtonCom from "../components/ButtonCom";

// MarginCom component is used to give margin to other components
import MarginCom from "../components/MarginCom";

// AddingRoute conponent starts here
// AddingRoute component add user to firebase database in real time
// ---------------------------------------------- component Starts ---------------------------------------------------
const AddingRoute = () => {
	// taking createUser function from context api by using UserUseContext
	// createUser function creates user by add user name in firebase database
	const { createUser } = UserUseContext();

	// two states of this function component

	// 1, name state for setting name of the user from InputCom component
	const [name, setName] = useState("");

	// 2, error state for giving error massage to user on:
	// - if field is empty
	// - if name characters are less then 3 characters
	const [error, setError] = useState("");

	return (
		<>
			{/* main headding */}
			<h1>Add Name</h1>

			{/* error are showen in here if there are any errors */}
			{error ? <h4>{error}</h4> : null}

			{/* InputCom component used to get input from users */}
			<InputCom
				// forReRendering is used so that this component only rerender if the passing prop in changed
				forReRendering={`AddUser + ${name} + InputCom`}
				// when the value in input field (which is in this component) changes it sets the name state
				// by using setName and useCallback hook is used so that because of any reason this component
				// rerenders (like if there is a change in error state) this component does not rerender and
				// it only rerender when name state changes
				onChange={useCallback((value) => {
					// for setting name
					setName(value);
				}, [])}
			/>

			{/* MarginCom components is used for marginning ButtonCom component */}
			{/* MarginCom components rerenders only when name state changes*/}
			<MarginCom
				marginning="1rem 0 0 0"
				forReRendering={`AddUser + ${name} + MarginCom`}
			>
				{/* ButtonCom component is used so that users can click on it and the user is created by the */}
				{/* name state and it will only rerender when name state is changed */}
				<ButtonCom
					forReRendering={`AddUser + ${name} + ButtonCom`}
					title="add"
					// useCallback is used so that this onClick function is only recreated if name state changes
					// not on other states
					onClick={useCallback(() => {
						if (!name) {
							// - if field is empty then it will set Error
							setError("Name is required");
						} else if (name.length < 3) {
							// - if name characters are less then 3 characters then it will set Error
							setError("Name should be more then 2 characters");
						} else {
							// createUser function is used to create a user in firebase database
							// createUser function is taken from UserUseContext function
							createUser(name);
							setError("");
						}
					}, [name])}
				/>
			</MarginCom>
		</>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------
// memo is a higher order component which controls the rerendering of the component passed in as a props
// AddingRoute is exported and is used in mainPage compnent
export default memo(AddingRoute);
