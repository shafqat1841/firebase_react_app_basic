// importing main hooks to use in this component from React
import { createContext, useContext, useState, useEffect } from "react";

// importing function from CreateUserApi file
import {
	snapshot,
	creatingUserApi,
	settingUserLastNameApi,
	updatingUserApi,
	deletingUserApi,
	gettingUserApi,
} from "../api/CreatingUserApi";

// Creating object context by using createContext in which we have initial properties and methods
const UserContext = createContext({
	users: [],
	createUser: () => {},
	updateUser: () => {},
	deleteUser: () => {},
	getUser: () => {},
	updatingUserDocRef: "",
	setUpdatingUserDocRef: () => {},
	settingUserLastNameApi: () => {},
	gettingUserDocRef: "",
	setGettingUserDocRef: () => {},
});

// UserProvider component is context provider higher order component which provide its
// child components all the properties and method of the context api
const UserProvider = (props) => {
	// states of this component
	// users State which is an array
	const [users, setUsers] = useState([]);
	// updatingUserDocRef state in it we set user doc referance id by which we can get user doc referance
	// by which we can get user doc which should be updated
	const [updatingUserDocRef, setUpdatingUserDocRef] = useState();
	// gettingUserDocRef state in it we set user doc referance id by which we can get user doc referance
	// by which we can get user doc
	const [gettingUserDocRef, setGettingUserDocRef] = useState();

	// when this component first mount it should get all users by snapshot function and set all users in
	// users state by setUsers state function
	// snapshot function runs onSnapshot firebase function which always run when there is a change in the collection
	useEffect(() => {
		snapshot(setUsers);
		return snapshot(setUsers);
	}, []);

	// createUser runs creatingUserApi from CreatingUserApi file
	// it have one parameter name which is used in creatingUserApi function for creating user
	const createUser = async (name) => {
		await creatingUserApi(name);
	};

	// settingUserLastName runs settingUserLastNameApi from CreatingUserApi file
	// it have two parameter
	// 1, docRefId which have doc id
	// 2, setUpdatingUserLastName which will have setLastName state setter function to set
	// user last name from UpdatingPage components
	const settingUserLastName = async (docRefId, setUpdatingUserLastName) => {
		await settingUserLastNameApi(docRefId, setUpdatingUserLastName);
	};

	// updateUser runs updatingUserApi from CreatingUserApi file
	// it have three parameter
	// 1, docRefId which have doc id
	// 2, name state from UpdatingPage component
	// 3, lastName state from UpdatingPage component
	const updateUser = async (docRefId, name, lastName) => {
		await updatingUserApi(docRefId, name, lastName);
	};

	// deleteUser runs deletingUserApi from CreatingUserApi file
	// it have one parameter docRefId which have doc id which is use in deletingUserApi
	// for deleting the doc (user) from collection
	const deleteUser = async (docRefId) => {
		await deletingUserApi(docRefId);
	};

	// getUser runs gettingUserApi from CreatingUserApi file
	// it have two parameter docRefId and settingUser
	// 1, docRefId have doc id which is used to get user's doc referance in gettingUserApi
	// 2, settingUser which have setUser (state setter function) which set the user in user state
	// in GettingPage component
	const getUser = async (docRefId, settingUser) => {
		await gettingUserApi(docRefId, settingUser);
	};

	// contextValue is a constant object which have all the states and functions in this component
	const contextValue = {
		users,
		createUser,
		updateUser,
		deleteUser,
		getUser,
		updatingUserDocRef,
		setUpdatingUserDocRef,
		settingUserLastName,
		gettingUserDocRef,
		setGettingUserDocRef,
	};

	return (
		// provides all the states and functions by contextValue constant to child component
		// by UserContext provider in value prop
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	);
};

// UserUseContext is a function which returns all context value (in this case properties and mathods)
const UserUseContext = () => {
	// we are using useContext hook with UserContext parameter to get all properties and mathods
	// of UserContext in data constant and then return it
	const data = useContext(UserContext);
	return data;
};

// we are exporting UserProvider component which will be use in app.js file's app component (which have
// all the child components)
// and we are exporting UserUseContext function which we will use in any component to get the context api's
// all states , properties and methods
export { UserProvider, UserUseContext };
