import React from "react";

const InputCom = ({ onChange, initialValue }) => {
	return (
		<>
			<input
				placeholder={initialValue}
				onChange={(e) => {
					onChange(e.target.value);
				}}
			/>
		</>
	);
};

export default InputCom;
