// imported HOC from react
import { memo } from "react";

// button component is for user clicking
// forReRendering prop is used in memo so that this component rerenders according to it
// title prop is for inside text of button
// onClick prop is a function passed from parent component for some other processing in their
// ---------------------------------------------- component Starts ---------------------------------------------------
const ButtonCom = ({ forReRendering, title, onClick }) => {
	return (
		<>
			<button onClick={onClick}>{title}</button>
		</>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// memo is a higher order component which controls the rerendering of the component passed
// as first prop in it and in second prop we have a callback function in which we spacify how
// this component should rerender
export default memo(ButtonCom, (prevProps, nextProps) => {
	// if the return is true then this component rerenders
	return prevProps.forReRendering === nextProps.forReRendering;
});
