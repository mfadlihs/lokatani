import styled from "@emotion/styled";
import ColorConstant from "../../utils/colorConstant";
import tw from "tailwind-styled-components";

export const Container = styled.div`
	display: flex;
	top: 0px;
	background-color: ${ColorConstant.primary[2]};
	width: 100vw;
	padding: 20px 40px;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
`;

interface BackDropType {
	height: number;
}

export const BackDrop = styled.div<BackDropType>`
	width: 100vw;
	height: ${({ height }) => height + "px"};
`;
