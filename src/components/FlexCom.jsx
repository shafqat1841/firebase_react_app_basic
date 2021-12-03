import styled from "styled-components";

const FlexCom = ({
	flexDirection,
	alignItems,
	justifyContent,
	marginning,
	...props
}) => {
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

export default FlexCom;

const Div = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) =>
		flexDirection ? flexDirection : "row"};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : "baseline")};
	justify-content: ${({ justifyContent }) =>
		justifyContent ? justifyContent : "start"};
	margin: ${({ marginning }) => (marginning ? marginning : "0 0 0 0")};
`;
