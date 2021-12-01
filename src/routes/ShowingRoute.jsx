import React from "react";
import { onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { colRef, db } from "../firebase";
import ButtonCom from "../components/ButtonCom";
import UpdatingCom from "./UpdatingCom";

const ShowingRoute = () => {
	const [users, setUsers] = useState([]);
	const [updating, setUpdating] = useState(false);
	const [documentRef, setDocumentRef] = useState("");

	useEffect(() => {
		const snapshot = onSnapshot(colRef, (snapshot) => {
			setUsers(
				snapshot.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				})
			);
		});
		return snapshot;
	}, []);

	return (
		<>
			{updating ? (
				<UpdatingCom settingUpdating={setUpdating} documentRef={documentRef} />
			) : null}
			{users.length !== 0
				? users.map((user) => {
						return (
							<div key={user.id}>
								<h1>{user.name}</h1>
								<ButtonCom
									title="delete"
									onClick={() => {
										let docRef = doc(db, "users", user.id);
										deleteDoc(docRef);
									}}
								/>
								<ButtonCom
									title="update"
									onClick={() => {
										let docRef = doc(db, "users", user.id);
										setDocumentRef(docRef);
										setUpdating(true);
									}}
								/>
							</div>
						);
				  })
				: ""}
		</>
	);
};

export default ShowingRoute;
