import styled from "styled-components";
import { keyframes } from "styled-components";

const appear = keyframes`
	0%{
		opacity: 0;
	}
	25%{
		opacity: 0.2;
	}
	50%{
		opacity: 0.5;
	}
	75%{
		opacity: 0.7;
	}
	100%{
		opacity: 1;
	}
`
export const BackdropDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.25);
	animation-name: ${appear};
	animation-duration: 250ms;
	animation-timing-function: linear;
	animation-iteration-count: 1;
	animation-fill-mode: both;
`