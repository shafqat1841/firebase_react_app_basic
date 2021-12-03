import React from "react";
// import { Snapshot } from "../api/CreatingUserApi";
import ShowingAllUsers from "../features/ShowingAllUsers";
// import { onSnapshot, doc } from "firebase/firestore";
// import { useEffect, useState } from "react";

// import { colRef, db } from "../firebase";
// import ButtonCom from "../components/ButtonCom";
// import UpdatingCom from "./UpdatingCom";
// import FlexCom from "../components/FlexCom";
// import MarginCom from "../components/MarginCom";
// import GettingUser from "./GettingUser";

// import { UserUseContext } from "../context/UserContext";

const ShowingRoute = () => {
	// const { getAllUsers, deleteUser } = UserUseContext();

	// const [users, setUsers] = useState([]);
	// const [updating, setUpdating] = useState(false);
	// const [documentRef, setDocumentRef] = useState("");
	// const [singleUserRef, setSingleUserRef] = useState({});
	// const [gettingSingleUser, setGettingSingleUser] = useState(false);

	// useEffect(() => {
	// getAllUsers();
	// const snapshot = onSnapshot(colRef, (snapshot) => {
	// 	setUsers(
	// 		snapshot.docs.map((doc) => {
	// 			return { ...doc.data(), id: doc.id };
	// 		})
	// 	);
	// });
	// return snapshot;
	// }, []);

	return (
		// <>
		//----------------------------------------------------------------------------------
		// 	{updating ? (
		// 		<FlexCom
		// 			flexDirection="column"
		// 			marginning="5vh 0 5vh 0"
		// 			alignItems="center"
		// 			justifyContent="center"
		// 		>
		// 			<UpdatingCom
		// 				settingUpdating={setUpdating}
		// 				documentRef={documentRef}
		// 			/>
		// 		</FlexCom>
		// 	) : null}

		//----------------------------------------------------------------------------------

		// 	{gettingSingleUser ? (
		// 		<FlexCom
		// 			flexDirection="column"
		// 			marginning="5vh 0 5vh 0"
		// 			alignItems="center"
		// 			justifyContent="center"
		// 		>
		// 			<GettingUser
		// 				settingGettingSingleUser={setGettingSingleUser}
		// 				singleUserRef={singleUserRef}
		// 			/>
		// 		</FlexCom>
		// 	) : null}

		//----------------------------------------------------------------------------------

		// 	{users.length !== 0
		// 		? users.map((user) => {
		// 				return (
		// 					<FlexCom
		// 						flexDirection="column"
		// 						alignItems="center"
		// 						justifyContent="center"
		// 						key={user.id}
		// 					>
		// 						<h1>{user.name}</h1>
		// 						<FlexCom
		// 							flexDirection="row"
		// 							alignItems="center"
		// 							justifyContent="center"
		// 						>
		// 							<MarginCom marginning="0 0.5rem 0 0.5rem">
		// 								<ButtonCom
		// 									title="delete"
		// 									onClick={() => {
		// 										let docRef = doc(db, "users", user.id);
		// 										deleteUser(docRef);
		// 									}}
		// 								/>
		// 							</MarginCom>
		// 							<MarginCom marginning="0 0.5rem 0 0.5rem">
		// 								<ButtonCom
		// 									title="update"
		// 									onClick={() => {
		// 										let docRef = doc(db, "users", user.id);
		// 										setDocumentRef(docRef);
		// 										setUpdating(true);
		// 									}}
		// 								/>
		// 							</MarginCom>
		// 							<MarginCom marginning="0 0.5rem 0 0.5rem">
		// 								<ButtonCom
		// 									title="detail"
		// 									onClick={() => {
		// 										let docRef = doc(db, "users", user.id);
		// 										setSingleUserRef(docRef);
		// 										setGettingSingleUser(true);
		// 										// getDoc(docRef).then((doc) => {
		// 										// 	setSingleUserRef({ ...doc.data(), id: doc.id });
		// 										// });
		// 									}}
		// 								/>
		// 							</MarginCom>
		// 						</FlexCom>
		// 					</FlexCom>
		// 				);
		// 		  })
		// 		: ""}
		// </>
		<>
			<ShowingAllUsers />
		</>
	);
};

export default ShowingRoute;
