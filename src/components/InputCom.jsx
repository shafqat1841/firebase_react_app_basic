import React from "react";

const InputCom = ({ onChange }) => {
	return (
		<>
			<input
				onChange={(e) => {
					onChange(e.target.value);
				}}
			/>
		</>
	);
};

export default InputCom;
