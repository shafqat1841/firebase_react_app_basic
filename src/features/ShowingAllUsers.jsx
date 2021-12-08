// import Fragment so that we don't have additional divs when this component renders
import { Fragment } from "react";

// imported UserUseContext so that we can use the content of context api
import { UserUseContext } from "../context/UserContext";
// FlexCom for rendering child component according to it
import FlexCom from "../components/FlexCom";
// DeletingUser component for deleting users from database
import DeletingUser from "./DeletingUser";
// UpdatingUser component for updating users from database
import UpdatingUser from "./UpdatingUser";
// GettingUser component for getting users from database
import GettingUser from "./GettingUser";

// ShowingAllUsers conponent starts here
// ShowingAllUsers component shows all user from firebase database in real time
// all users which are shown have there buttons
// 1,delete 2,update 3,detail
// ---------------------------------------------- component Starts ---------------------------------------------------
const ShowingAllUsers = () => {
	// taking users from context api by using UserUseContext function
	// users are objects with name and id properties from firebase database
	// users is a state in context api which is set by setUser function and firebase onsnapShot function
	const { users } = UserUseContext();

	// we are iterating users which will be displayed on mainPage
	return users.map((user, i) => {
		return (
			// Fragment is used so that we don't creat unwanted divs
			// this Fragment have user id as key
			<Fragment key={user.id}>
				{/* showing user name in h1 element */}
				<h2>{user.name}</h2>
				{/* using FlexCom which describe how the child components should look when render */}
				<FlexCom
					// rerenders whenever user name changes or added
					forReRendering={`ShowingAllUsers + ${user.name} +  Flex`}
					flexDirection="row"
					alignItems="center"
					justifyContent="center"
				>
					{/* DeletingUser component is use to delete users */}
					{/* DeletingUser component is a button */}
					{/* DeletingUser component has one prop user's id (which is from firestore) */}
					<DeletingUser docRefId={user.id} />

					{/* UpdatingUser component is use to update users */}
					{/* UpdatingUser component is a button */}
					{/* UpdatingUser component has one prop user's id (which is from firestore) */}
					<UpdatingUser docRefId={user.id} />

					{/* GettingUser component is use to get details about users */}
					{/* GettingUser component is a button */}
					{/* GettingUser component has one prop user's id (which is from firestore) */}
					<GettingUser docRefId={user.id} />
				</FlexCom>
			</Fragment>
		);
	});
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// ShowingAllUsers is exported and is used in mainPage compnent
export default ShowingAllUsers;
