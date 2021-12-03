import {
	onSnapshot,
	doc,
	getDoc,
	addDoc,
	updateDoc,
	deleteDoc,
} from "@firebase/firestore";
import { colRef, db } from "../firebase";

const snapshot = (setUsers) => {
	onSnapshot(colRef, (snapshot) => {
		setUsers(
			snapshot.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			})
		);
	});
};

const creatingUserApi = async (name) => {
	await addDoc(colRef, { name: name });
};

const deletingUserApi = async (docRefId) => {
	let docRef = await doc(db, "users", docRefId);
	await deleteDoc(docRef);
};

const settingUserLastNameApi = async (docRefId, setUpdatingUserLastName) => {
	let docRef = await doc(db, "users", docRefId);
	getDoc(docRef).then((doc) => {
		setUpdatingUserLastName(doc.data().name);
	});
};

const updatingUserApi = async (docRefId, name, lastName) => {
	let docRef = await doc(db, "users", docRefId);
	await updateDoc(docRef, name ? { name: name } : { name: lastName });
};

const gettingUserApi = async (docRefId, settingUser) => {
	let docRef = await doc(db, "users", docRefId);
	getDoc(docRef).then((doc) => {
		settingUser({ ...doc.data(), id: doc.id });
	});
};

export {
	snapshot,
	creatingUserApi,
	settingUserLastNameApi,
	updatingUserApi,
	deletingUserApi,
	gettingUserApi,
};
