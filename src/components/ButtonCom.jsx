import React from "react";

const ButtonCom = ({ forReRendering, title, onClick }) => {
	// console.log(forReRendering ? forReRendering : null);
	return (
		<>
			<button onClick={onClick}>{title}</button>
		</>
	);
};

// export default React.memo(ButtonCom);
export default React.memo(ButtonCom, (prevProps, nextProps) => {
	return prevProps.forReRendering === nextProps.forReRendering;
});
