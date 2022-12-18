import styled from "@emotion/styled";

interface GambarType {
	active: boolean;
}

export const Gambar = styled.div<GambarType>`
	background: ${({ active }) =>
			!active &&
			"linear-gradient(0deg, rgba(217, 217, 217, 0.3), rgba(217, 217, 217, 0.3)),"}
		url("/assets/images/product.png");
	aspect-ratio: 1/1;
	background-size: cover;
	flex-grow: 1;
	border-radius: 10px;
	cursor: pointer;
	${({ active }) => active && "border: 5px solid #F1C411;"}
`;
