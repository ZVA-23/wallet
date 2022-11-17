import styled from "styled-components";
import { keyframes } from "styled-components";

export const Form = styled.form`
	min-width: 280px;
	
	cursor: pointer;

	display: flex;
	flex-direction: column;
	gap: 20px;
	
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 16px;
	}
	
	@media screen and (min-width: 1280px) {
		gap: 32px;
	}
`
export const SelectorWrapper = styled.div`
	position: relative;
	width: 100%;
`
export const Selector = styled.div`
	padding: 12px 20px 14px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--main-text-color);
	border-radius: 30px;;
	font-size: 16px;
	line-height: calc(24 / 16);
	color: var(--main-text-color);
`
const appear = keyframes`
  0%{
	opacity: 0;
	transform: translateY(-60%);
  }
  10%{
	opacity: 0;
	transform: translateY(-50%);
  }
  20%{
	opacity: 0;
	transform: translateY(-40%);
  }
  30%{
	opacity: 0;
	transform: translateY(-30%);
  }
  40%{
	opacity: 0;
	transform: translateY(-20%);
  }
  50%{
	opacity: 0.3;
	transform: translateY(-10%);
  }
  60%{
	opacity: 0.5;
	transform: translateY(-5%);
  }
  70%{
	opacity: 0.7;
	transform: translateY(0%);
  }
  80%{
	opacity: 0.8;
	transform: translateY(0%);
  }
  90%{
	opacity: 0.9;
	transform: translateY(0%);
  }
  100%{
	opacity: 1;
	transform: translateY(0%);
  }
`;

export const SelectList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 5;
	width: 100%;
	max-height: 280px;
	overflow: auto;
	padding: 0 20px;
	background-color: rgba(255, 255, 255, 0.7);
	box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(25px);
	border-radius: 20px;
	text-align:left;
	animation-name: ${appear};
	animation-duration: 300ms;
	animation-iteration-count: 1;
	animation-fill-mode: both;
`
export const SelectListItem = styled.li`
	font-family: 'Circe';
	font-size: 18px;
	line-height: calc(27 / 18);
	padding: 8px 0;
	cursor: pointer;
	transition: background-color var(--animation), color var(--animation);

	:hover, :focus{
		background-color: var(--main-bg-color);
		color: var(--expense-text-color);
	}
`

