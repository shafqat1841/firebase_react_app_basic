import React from "react";

const TestingCom = () => {
	return (
		<div>
			<button
				onClick={() => {
					console.log("click");
				}}
			>
				button
			</button>
		</div>
	);
};

export default TestingCom;
