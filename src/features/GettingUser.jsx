// memo (higher order component) and useCallback hook is taken from react
import { memo, useCallback } from "react";
// useNavigate is imported from react-router-dom
import { useNavigate } from "react-router-dom";

// imported ButtonCom component from local files
import ButtonCom from "../components/ButtonCom";
// imported UserUseContext function from local files
import { UserUseContext } from "../context/UserContext";

// GettingUser conponent starts here
// GettingUser component sets user id as a value in the state of UserProvider component (which gives UserContext context api
// values to provide in child component)
// GettingUser component will have one prop docRefId (which is an id from firestore of a particular document)
// ---------------------------------------------- component Starts ---------------------------------------------------
const GettingUser = ({ docRefId }) => {
	// useNavigate function is used to navigate between different pages
	// useNavigate (old version is useHistory)
	let navigate = useNavigate();

	// taking setGettingUserDocRef state setter function from context api by using UserUseContext
	// setGettingUserDocRef state setter function sets user id as a value in gettingUserDocRef state in UserProvider component
	const { setGettingUserDocRef } = UserUseContext();

	// In GettingUser component we are returning a ButtonCom component
	return (
		<ButtonCom
			// forReRendering prop is for rerendering of this component if docRefId changes then this component rerenders
			forReRendering={`GettingUser + ${docRefId} + ButtonCom`}
			// title is for text in button which is inside ButtonCom component
			title="detail"
			// onClick is passed as a prop and is used on onClick of button element inside ButtonCom component
			// in onClick prop we have a useCallback hook which only recreat this function depending on dependences which
			// improves performance
			// in this case we have user id as a dependence
			onClick={useCallback(() => {
				// when the button is click then we sent docRefId (user id) in setGettingUserDocRef state setter function
				// it sets user id as a value in gettingUserDocRef state in UserProvider component
				setGettingUserDocRef(docRefId);
				// we have pass next page address ("/GettingUser") in navigate to get to that page
				// when the button is click it navigate us to GettingUser page (GettingPage component) which we have defined
				// in mainRoute component
				navigate("/GettingUser");
			}, [docRefId])}
		/>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// memo is a higher order component which controls the rerendering of the component passed in as a props
// GettingUser is exported and is used in ShowingAllUsers compnent as a button
export default memo(GettingUser);
