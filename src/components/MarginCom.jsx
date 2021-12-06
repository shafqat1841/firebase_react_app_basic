import { memo } from "react";
import styled from "styled-components";

const MarginCom = ({ marginning, forReRendering, ...props }) => {
	// console.log(forReRendering ? forReRendering : null);

	return <Div marginning={marginning}>{props.children}</Div>;
};

export default memo(MarginCom, (prevProps, nextProps) => {
	return prevProps.forReRendering === nextProps.forReRendering;
});

const Div = styled.div`
	margin: ${({ marginning }) => (marginning ? marginning : "0 0 0 0")};
`;
