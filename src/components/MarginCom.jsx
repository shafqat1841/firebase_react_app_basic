// imported HOC from react
import { memo } from "react";
// styled is imported for styling the component
import styled from "styled-components";

// MarginCom component is for using css margin properties on child components passed in it
// forReRendering prop is used in memo so that this component rerenders according to it
// marginning props is passed in styled component which is used to style html element in css format
// we used spread operator to extracted the remainning props (in this project we only use it so that
// child components which we get in palce of props.children render according to it )
// ---------------------------------------------- component Starts ---------------------------------------------------
const MarginCom = ({ marginning, forReRendering, ...props }) => {
	return (
		<Div
			// props except forReRendering and spreaded props are passed in styled components
			marginning={marginning}
		>
			{/* child component come here */}
			{props.children}
		</Div>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

// memo is a higher order component which controls the rerendering of the component passed
// as first prop in it and in second prop we have a callback function in which we spacify how
// this component should rerender
export default memo(MarginCom, (prevProps, nextProps) => {
	// if the return is true then this component rerenders
	return prevProps.forReRendering === nextProps.forReRendering;
});

// this is a styled component
// HTML elements are styled according to css and then used in React component for rendering
// for margin property we have variable value which is passed when this styled component is used
// ---------------------------------------------- styled component Starts ---------------------------------------------------
const Div = styled.div`
	/* this styled component is styled according to css in here*/
	margin: ${({ marginning }) => (marginning ? marginning : "0 0 0 0")};
`;
// ---------------------------------------------- styled component Ends ---------------------------------------------------
