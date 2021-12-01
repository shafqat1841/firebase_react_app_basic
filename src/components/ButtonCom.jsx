import React from "react";

const ButtonCom = ({ title, onClick }) => {
	return (
		<>
			<button onClick={onClick}>{title}</button>
		</>
	);
};

export default ButtonCom;
