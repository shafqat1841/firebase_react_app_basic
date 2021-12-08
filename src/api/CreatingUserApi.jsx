// importing all the important functions from firestore
import {
	// to get all users
	onSnapshot,
	// to get doc refrance by doc id
	doc,
	// to get single doc
	getDoc,
	// to add single doc
	addDoc,
	// to update single doc
	updateDoc,
	// to delete single doc
	deleteDoc,
} from "@firebase/firestore";

// importing collection and database referance from firebase file
import { colRef, db } from "../firebase";

// snapshot give all users data in real time
// in it we have a callback function (setUsers) which set users in context api's state "users"
// this function is an async function
const snapshot = (setUsers) => {
	// in onSnapshot we pass two parameter one colRef (referance to collection)
	// one this functions callback which have one parameter (snapshot) in which
	// we define what we have to do  with this parameter
	onSnapshot(colRef, (snapshot) => {
		// callback function (setUsers) to set users in context api's state "users"
		// snapshot data iteration (in here we are setting users of context api by setUsers)
		setUsers(
			snapshot.docs.map((doc) => {
				// returning users names and id in an object form
				return { ...doc.data(), id: doc.id };
			})
		);
	});
};

// creatingUserApi is an async function with one parameter (name)
const creatingUserApi = async (name) => {
	// in creatingUserApi we are using addDoc function from firestore
	// which add a new user and addDoc have two parameter one is collection referance
	// and one is an object with name property
	await addDoc(colRef, { name: name });
};

// deletingUserApi is an async function with one parameter docRefId (which is the id of the
// doc we want to delete)
const deletingUserApi = async (docRefId) => {
	// in deletingUserApi we are using doc function from firestore which have three parameter
	// 1, db = database from firebase file
	// 2, users = referance of the collection
	// 3, docRefId = id of the doc we want to delete
	// doc returns doc referance we want to delete
	let docRef = await doc(db, "users", docRefId);
	// using deleteDoc function from firestore to delete docRef (doc referance)
	await deleteDoc(docRef);
};

// settingUserLastNameApi is an async function which have two parameter
// 1, docRefId (which is the id of the doc we want to update)
// 2, setUpdatingUserLastName (which is a state setter "setLastName" from UpdatingPage component which
// sets the lastName state)
const settingUserLastNameApi = async (docRefId, setUpdatingUserLastName) => {
	// doc returns doc referance by which we can get the doc in getDoc function
	let docRef = await doc(db, "users", docRefId);
	// getDoc is a promise which returns a the doc we want
	getDoc(docRef).then((doc) => {
		// in here we are using setUpdatingUserLastName (which is "setLastName" state setter ) to set the lastName
		// state from doc
		setUpdatingUserLastName(doc.data().name);
		// setting doc referance ID in local storage so that when the page reloads it can still get the doc referance ID
		localStorage.setItem("updatingUserDocRef", docRefId);
	});
};

// settingUserLastNameApi is an async function which have three parameter
// 1, docRefId (which is the id of the doc we want to update)
// 2, name (by which we want to change previous name of the user)
// 3, lastName (which is the previous name of the user)
const updatingUserApi = async (docRefId, name, lastName) => {
	// doc returns doc referance we want to update
	let docRef = await doc(db, "users", docRefId);
	// updateDoc is a function by which update the user name
	// if we have the name then we return an object by name property with name
	// if we dont have name then we return an object by name property with lastName we have set with
	// settingUserLastNameApi function (above function)
	await updateDoc(docRef, name ? { name: name } : { name: lastName });
	// setting doc referance ID in local storage so that when the page reloads it can still get the doc referance ID
	await localStorage.setItem("docRefId", docRefId);
};

// gettingUserApi is an async function which have two parameter
// 1, docRefId (which is the id of the doc we want to get)
// 2, settingUser (which is a state setter "setUser" from GettingPage component which
// sets the user state)
const gettingUserApi = async (docRefId, settingUser) => {
	// doc returns doc referance we want to get
	let docRef = await doc(db, "users", docRefId);
	// getDoc is a promise which returns a the doc we want
	getDoc(docRef).then((doc) => {
		// in here we are using settingUser (which is "setUser" state setter ) to set the user
		// state from doc in an object by name and id property
		settingUser({ ...doc.data(), id: doc.id });
		// setting doc referance ID in local storage so that when the page reloads it can still get the doc referance ID
		localStorage.setItem("gettingUserDocRef", docRefId);
	});
};

// exporting all api function
export {
	snapshot,
	creatingUserApi,
	settingUserLastNameApi,
	updatingUserApi,
	deletingUserApi,
	gettingUserApi,
};
