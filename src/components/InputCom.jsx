// imported HOC from react
import { memo } from "react";

// InputCom component is so that we can get the values in input element
// forReRendering prop is used in memo so that this component rerenders according to it
// initialValue prop is used in placeholder attribute of input element
// onChange prop is a function passed from parent component for some other processing in their
// ---------------------------------------------- component Starts ---------------------------------------------------
const InputCom = ({ forReRendering, onChange, initialValue }) => {
	return (
		<>
			<input
				placeholder={initialValue}
				// when there is a change in input field then a event is triggered in which we have the value
				// which we have passed on onChange function
				onChange={(e) => {
					onChange(e.target.value);
				}}
			/>
		</>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// memo is a higher order component which controls the rerendering of the component passed
// as first prop in it and in second prop we have a callback function in which we spacify how
// this component should rerender
export default memo(InputCom, (prevProps, nextProps) => {
	// if the return is true then this component rerenders
	return prevProps.forReRendering === nextProps.forReRendering;
});
