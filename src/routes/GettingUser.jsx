import { useState, useEffect } from "react";
import { getDoc } from "firebase/firestore";

import ButtonCom from "../components/ButtonCom";

const GettingUser = ({ settingGettingSingleUser, singleUserRef }) => {
	const [user, setUser] = useState();
	const [userLength, setUserLength] = useState("");
	const [userIdLength, setUserIdLength] = useState("");

	const fatchAndSetData = async (ref) => {
		const doc = await getDoc(ref);
		await setUser({ ...doc.data(), id: doc.id });
	};

	useEffect(() => {
		fatchAndSetData(singleUserRef);
	}, [singleUserRef]);

	useEffect(() => {
		if (user !== undefined) {
			setUserLength(user.name.length);
			setUserIdLength(user.id.length);
		}
	}, [user]);

	return (
		<div>
			<h1>User Name</h1>
			<h1>{user ? user.name : null}</h1>
			<h4>User Name Length</h4>
			<h4>{userLength ? userLength : null}</h4>
			<h4>User ID Length</h4>
			<h4>{userIdLength ? userIdLength : null}</h4>
			<ButtonCom
				onClick={() => {
					setUser();
					settingGettingSingleUser(false);
				}}
				title="Cancel"
			/>
		</div>
	);
};

export default GettingUser;
