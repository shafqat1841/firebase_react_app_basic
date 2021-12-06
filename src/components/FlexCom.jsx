import { memo } from "react";
import styled from "styled-components";

const FlexCom = ({
	forReRendering,
	flexDirection,
	alignItems,
	justifyContent,
	marginning,
	...props
}) => {
	// console.log(forReRendering ? forReRendering : null);
	return (
		<Div
			flexDirection={flexDirection}
			alignItems={alignItems}
			justifyContent={justifyContent}
			marginning={marginning}
		>
			{props.children}
		</Div>
	);
};
export default memo(FlexCom, (prevProps, nextProps) => {
	return prevProps.forReRendering === nextProps.forReRendering;
});

const Div = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) =>
		flexDirection ? flexDirection : "row"};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : "baseline")};
	justify-content: ${({ justifyContent }) =>
		justifyContent ? justifyContent : "start"};
	margin: ${({ marginning }) => (marginning ? marginning : "0 0 0 0")};
`;
