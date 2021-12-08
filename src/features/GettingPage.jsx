// hook useEffect, useState is taken from react
import { useState, useEffect } from "react";

// importing useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";

// importing MarginCom and ButtonCom component to use in GettingPage component
import MarginCom from "../components/MarginCom";
import ButtonCom from "../components/ButtonCom";
// imported UserUseContext function from local files
import { UserUseContext } from "../context/UserContext";

// GettingPage conponent starts here
// UpdatingPage component gets user from firebase database
// ---------------------------------------------- component Starts ---------------------------------------------------
const GettingPage = () => {
	// 1, gettingUserDocRef state which was set when we were in GettingUser component
	// we'll use gettingUserDocRef to get user initial name from firebase database and to show it and show it and
	// its id length on page
	// 3, getUser is in UserProvider context api and is imported from CreatingUserApi file
	const { gettingUserDocRef, getUser } = UserUseContext();

	// useNavigate function is used to navigate between different pages
	// useNavigate (old version is useHistory)
	let navigate = useNavigate();

	// states of this component
	const [user, setUser] = useState();
	const [userLength, setUserLength] = useState("");
	const [userIdLength, setUserIdLength] = useState("");

	// when this page mounts or when gettingUserDocRef updates we'll do the following things
	useEffect(() => {
		// chacking if gettingUserDocRef is defined or not. if not then nothing will happens but if
		// gettingUserDocRef updates then this component updates and we'll chack again and then procced
		// the following steps.
		if (gettingUserDocRef) {
			// we'll use getUser to get the document (user name and id) by using user id which
			// was set when we were in GettingUser component.
			// getUser will have two parameters one user id and second a callback function (setUser)
			// to set this component User state.
			getUser(gettingUserDocRef, setUser);
			// In here we are returning this function when this component unmounts so that it'll not procced those
			// process
			return getUser(gettingUserDocRef, setUser);
		} else {
			// if we reload then it'll first get user id from local storage then
			// we'll use getUser to get the document (user name and id) by using user id which
			// this time we'll get from local storage and set on local variable.
			// getUser will have two parameters one user id and second a callback function (setUser)
			// to set this component User state.
			let gettingUserDocRef = localStorage.getItem("gettingUserDocRef");
			getUser(gettingUserDocRef, setUser);
			return getUser(gettingUserDocRef, setUser);
		}
	}, [gettingUserDocRef]);

	// when this page mounts or when user updates we'll do the following things
	useEffect(() => {
		// chacking if user is defined or not. if not then nothing will happens but if
		// user updates then this component updates and we'll chack again and then procced
		// the following steps.
		if (user !== undefined) {
			// we'll set userLength state
			setUserLength(user.name.length);
			// we'll set userTdLength state
			setUserIdLength(user.id.length);
		}
	}, [user]);

	// In GettingPage component we are returning h1 element = 1 , h3 element = 2, h4 element = 4 ,
	// MarginCom = 1 and ButtonCom component = 1
	return (
		// this is a fragment which is used in place of div for returning of this component
		<>
			{/* h1 element for showing User Info text */}
			<h1>User Info</h1>
			{/* h3 element for showing User Name text */}
			<h3>User Name :</h3>
			{/* h3 element for User Name from state */}
			<h3>{user ? user.name : null}</h3>
			{/* h4 element for User Name Length text */}
			<h4>User Name Length :</h4>
			{/* h4 element for User Name Length from state */}
			<h4>{userLength ? userLength : null}</h4>
			{/* h4 element for User ID Length text */}
			<h4>User ID Length :</h4>
			{/* h4 element for User id Length from state */}
			<h4>{userIdLength ? userIdLength : null}</h4>

			{/* MarginCom components is used for marginning ButtonCom component */}
			{/* MarginCom components will not rerenders */}
			<MarginCom
				forReRendering={`GettingPage + null + MarginCom`}
				marginning="0 0 1rem 0"
			>
				{/* ButtonCom component is used so that users can click on it and get back to MainPage component) */}
				{/* MarginCom components will not rerenders */}
				<ButtonCom
					forReRendering={`GettingPage + null + MarginCom`}
					title="Main Page"
					onClick={() => {
						// when the button is click it navigate us to main page (mainPage component) which we have defined
						// in mainRoute component
						navigate("/");
					}}
				/>
			</MarginCom>
		</>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// GettingPage is exported and is used in MainRoute compnent as a route
export default GettingPage;
