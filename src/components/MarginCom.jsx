import styled from "styled-components";

const MarginCom = ({ marginning, ...props }) => {
	return <Div marginning={marginning}>{props.children}</Div>;
};

export default MarginCom;

const Div = styled.div`
	margin: ${({ marginning }) => (marginning ? marginning : "0 0 0 0")};
`;
