import styled from "styled-components";
import { keyframes } from "styled-components";

const appear = keyframes`
	0%{
		transform: scale(1.2) translate(-50%, -50%);
	}
	50%{
		transform: scale(1.1) translate(-50%, -50%);
	}
	100%{
		transform: scale(1) translate(-50%, -50%);
	}
`

const appearMobile = keyframes`
0%{
	transform: translateX(-150%);
}
50%{
	transform: translateX(-75%);
}
100%{
	transform: translateX(0);
}
`

export const ModalWindow = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--main-bg-color);
	animation-name: ${appearMobile};
	animation-duration: 250ms;
	animation-timing-function: linear;
	animation-fill-mode: both;
	animation-iteration-count: 1;
	animation-direction: alternate;
	
	@media (min-width: 768px)  {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 540px;
		height: 603px;
		border-radius: 20px;

		animation-name: ${appear};
		animation-duration: 250ms;
		animation-timing-function: linear;
		animation-fill-mode: both;
		animation-iteration-count: 1;
		animation-direction: alternate;
	}
`