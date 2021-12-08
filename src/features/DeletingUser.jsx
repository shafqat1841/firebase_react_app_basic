// imported HOC memo and useCalback hook from react
import { useCallback, memo } from "react";

// imported ButtonCom component from local files
import ButtonCom from "../components/ButtonCom";
// imported UserUseContext function from local files
import { UserUseContext } from "../context/UserContext";

// DeletingUser conponent starts here
// DeletingUser component delete user from firebase database
// DeletingUser component will have one prop docRefId (which is an id from firestore of a particular document)
// ---------------------------------------------- component Starts ---------------------------------------------------
const DeletingUser = ({ docRefId }) => {
	// taking deleteUser function from context api by using UserUseContext
	// deleteUser function delete user from firebase database
	const { deleteUser } = UserUseContext();

	// In DeletingUser component we are returning a ButtonCom component
	return (
		<ButtonCom
			// forReRendering prop is for rerendering of this component if docRefId changes then this component rerenders
			forReRendering={`DeleteUser + ${docRefId} + ButtonCom`}
			// title is for text in button which is inside ButtonCom component
			title="delete"
			// onClick is passed as a prop and is used on onClick of button element inside ButtonCom component
			// in onClick prop we have a useCallback hook which only recreat this function depending on dependences which
			// improves performance
			// in  this case we have user id as a dependence
			onClick={useCallback(() => {
				// when the button is click then we sent docRefId (user id) in deleteUser function which pass it on
				// deletingUserApi function in context api which will pass it on doc function of firebase upon which
				// we will get document referance which is used in deleteDoc function of firebase which delete's user document
				deleteUser(docRefId);
			}, [docRefId])}
		/>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// memo is a higher order component which controls the rerendering of the component passed
// as first prop in it and in second prop we have a callback function in which we spacify how
// this component should rerender
// DeletingUser is exported and is used in ShowingAllUsers compnent as a button
export default memo(DeletingUser, (prevProps, nextProps) => {
	// if the return is true then this component rerenders
	return prevProps.docRefId === nextProps.docRefId;
});
