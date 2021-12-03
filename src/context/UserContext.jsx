import { createContext, useContext, useState, useEffect } from "react";

import {
	snapshot,
	creatingUserApi,
	settingUserLastNameApi,
	updatingUserApi,
	deletingUserApi,
	gettingUserApi,
} from "../api/CreatingUserApi";

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

const UserProvider = (props) => {
	const [users, setUsers] = useState([]);
	const [updatingUserDocRef, setUpdatingUserDocRef] = useState();
	const [gettingUserDocRef, setGettingUserDocRef] = useState();

	// const getAllUsers = async (setUsers) => {
	// 	await snapshot(setUsers);
	// };

	// const getAllUsers = useCallback(async () => {
	// 	await snapshot(setUsers);
	// }, [setUsers]);

	useEffect(() => {
		snapshot(setUsers);
		return snapshot(setUsers);
	}, []);

	const createUser = async (name) => {
		await creatingUserApi(name);
	};

	const settingUserLastName = async (docRefId, setUpdatingUserLastName) => {
		await settingUserLastNameApi(docRefId, setUpdatingUserLastName);
	};

	const updateUser = async (docRefId, name, lastName) => {
		await updatingUserApi(docRefId, name, lastName);
	};

	const deleteUser = async (docRefId) => {
		await deletingUserApi(docRefId);
	};

	const getUser = async (docRefId, settingUser) => {
		await gettingUserApi(docRefId, settingUser);
	};

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
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	);
};

const UserUseContext = () => {
	const data = useContext(UserContext);
	return data;
};

export { UserProvider, UserUseContext };
