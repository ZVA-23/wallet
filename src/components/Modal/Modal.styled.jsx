import styled from "styled-components";

export const ModalWindow = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--main-bg-color);
	
	@media (min-width: 768px)  {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 540px;
		height: auto;	
		border-radius: 20px;
	}
`