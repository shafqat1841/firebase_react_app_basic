import { useCallback, memo } from "react";
import ButtonCom from "../components/ButtonCom";
import { UserUseContext } from "../context/UserContext";

const DeletingUser = ({ docRefId }) => {
	const { deleteUser } = UserUseContext();

	return (
		<ButtonCom
			forReRendering={`DeleteUser + ${docRefId} + ButtonCom`}
			title="delete"
			onClick={useCallback(() => {
				deleteUser(docRefId);
			}, [docRefId])}
		/>
	);
};

export default memo(DeletingUser, (prevProps, nextProps) => {
	return prevProps.docRefId === nextProps.docRefId;
});
