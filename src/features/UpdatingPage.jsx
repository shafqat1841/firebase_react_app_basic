// hook useEffect, useState, useCallback is taken from react
import { useEffect, useState, useCallback } from "react";
// useNavigate is imported from react-router-dom
import { useNavigate } from "react-router-dom";

// imported MarginCom component from local files
import MarginCom from "../components/MarginCom";
// imported InputCom component from local files
import InputCom from "../components/InputCom";
// imported ButtonCom component from local files
import ButtonCom from "../components/ButtonCom";
// imported UserUseContext function from local files
import { UserUseContext } from "../context/UserContext";

// UpdatingPage conponent starts here
// UpdatingPage component update user in firebase database
// ---------------------------------------------- component Starts ---------------------------------------------------
const UpdatingPage = () => {
	// useNavigate function is used to navigate between different pages
	// useNavigate (old version is useHistory)
	let navigate = useNavigate();

	// 1, updatingUserDocRef state which was set when we were in UpdatingUser component
	// we'll use updatingUserDocRef to get user initial name from firebase database and to show it on page and in input element
	// we'll use updatingUserDocRef to get set new user name in firebase database
	// 2, settingUserLastName is in UserProvider context api and is imported from CreatingUserApi file
	// 3, updateUser is in UserProvider context api and is imported from CreatingUserApi file
	const { updatingUserDocRef, settingUserLastName, updateUser } =
		UserUseContext();

	// states of this component
	// name State which is a string
	const [name, setName] = useState("");
	// lastName State which is a string
	const [lastName, setLastName] = useState("");

	// when this page mounts or when updatingUserDocRef updates we'll do the following things
	useEffect(() => {
		// chacking if updatingUserDocRef is defined or not. if not then nothing will happens but if
		// updatingUserDocRef updates then this component updates and we'll chack again and then procced
		// the following steps.
		if (updatingUserDocRef) {
			// we'll use settingUserLastName to get the document (user name and id) by using user id which
			// was set when we were in UpdatingUser component.
			// settingUserLastName will have two parameters one user id and second a callback function (setLastName)
			// to set this component lastName state.
			settingUserLastName(updatingUserDocRef, setLastName);
			// In here we are returning this function when this component unmounts so that it'll not procced those
			// process
			return settingUserLastName(updatingUserDocRef, setLastName);
		} else {
			// if we reload then it'll first get user id from local storage then
			// we'll use settingUserLastName to get the document (user name and id) by using user id which
			// this time we'll get from local storage and set on local variable.
			// settingUserLastName will have two parameters one user id and second a callback function (setLastName)
			// to set this component lastName state.
			let updatingUserDocRef = localStorage.getItem("updatingUserDocRef");
			settingUserLastName(updatingUserDocRef, setLastName);
			// In here we are returning this function when this component unmounts so that it'll not procced those
			// process
			return settingUserLastName(updatingUserDocRef, setLastName);
		}
	}, [updatingUserDocRef]);

	// In UpdatingUser component we are returning h1 element , InputCom , MarginCom and ButtonCom component
	return (
		// this is a fragment which is used in place of div for returning of this component
		<>
			{/* h1 element for showing last name of user which will be updated */}
			<h1>{lastName}</h1>
			{/* InputCom component used to get input from users */}
			<InputCom
				// forReRendering is used so that this component only rerender if the passing prop in changed
				forReRendering={`UpdatingPage + ${name + lastName} + InputCom`}
				// this shows the last name of user in input element
				initialValue={lastName}
				// when the value in input field (which is in this component) changes it sets the name state
				// by using setName and useCallback hook is used so that because of any reason this component
				// rerenders (like if there is a change in lastName state) this component does not rerender and
				// it only rerender when name and lastName state changes
				onChange={useCallback(
					(value) => {
						// for setting name
						setName(value);
					},
					[name]
				)}
			/>
			{/* MarginCom components is used for marginning ButtonCom component */}
			{/* MarginCom components rerenders only when updatingUserDocRef , name , lastName state changes*/}
			<MarginCom
				forReRendering={updatingUserDocRef + name + lastName}
				marginning="1rem 0 0 0"
			>
				{/* ButtonCom component is used so that users can click on it and the user is updated by the */}
				{/* name state and it will only rerender when (updatingUserDocRef , name , lastName) state is changed */}
				<ButtonCom
					// forReRendering prop is for rerendering of this component if (updatingUserDocRef , name , lastName) changes
					// then this component rerenders
					forReRendering={`UpdatingPage + ${
						updatingUserDocRef + name + lastName
					} + ButtonCom`}
					// title is for text in button which is inside ButtonCom component
					title="Update"
					// onClick is passed as a prop and is used on onClick of button element inside ButtonCom component
					// in onClick prop we have a useCallback hook which only recreat this function depending on dependences which
					// improves performance
					// in this case we have user name and lastName state as dependences
					onClick={useCallback(() => {
						// chacking updatingUserDocRef is defined or not
						// if updatingUserDocRef is true then it follows this process and if not then it will follow else process
						if (updatingUserDocRef) {
							// updateUser will have three parameters updatingUserDocRef (state set in UserProvider), name
							// (this component state), lastName (this component state which was set by settingUserLastName function)
							// updateUser function will update the user name (if provided )
							updateUser(updatingUserDocRef, name, lastName);
							// when the button is click it navigate us to main page (mainPage component) which we have defined
							// in mainRoute component
							navigate("/");
						} else {
							// if we reload then it'll first get user id from local storage and set it in
							// local veriable (updatingUserDocRef)
							let updatingUserDocRef =
								localStorage.getItem("updatingUserDocRef");
							// updateUser will have three parameters updatingUserDocRef (state set in UserProvider), name
							// (this component state), lastName (this component state which was set by settingUserLastName function)
							// updateUser function will update the user name (if provided )
							updateUser(updatingUserDocRef, name, lastName);
							// when the button is click it navigate us to main page (mainPage component) which we have defined
							// in mainRoute component
							navigate("/");
						}
					}, [name, lastName])}
				/>
			</MarginCom>
		</>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// UpdatingPage is exported and is used in MainRoute compnent as a route
export default UpdatingPage;
