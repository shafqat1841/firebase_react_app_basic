import React from "react";

const InputCom = ({ forReRendering, onChange, initialValue }) => {
	// console.log(forReRendering ? forReRendering : null);

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

// export default React.memo(InputCom);
export default React.memo(InputCom, (prevProps, nextProps) => {
	return prevProps.forReRendering === nextProps.forReRendering;
});
