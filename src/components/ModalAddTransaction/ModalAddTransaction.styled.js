import styled from "styled-components";
import { keyframes } from "styled-components";
import Minus from "../../icons/add-transactions/minus.svg";
import Plus from "../../icons/add-transactions/plus.svg";
import Calendar from "../../icons/add-transactions/calendar.svg";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

export const AddTransactionsWrapper = styled.div`
	padding: 20px 10px 37px;
	text-align: center;

	@media (min-width: 768px)  {
		padding: 40px 73px;
	}
`
export const Title = styled.h2`
	font-family: 'Poppins', sans-serif;
	font-size: 24px;
	line-height: calc(36 / 24);
	color: var(--main-text-color);

	@media (min-width: 768px)  {
		font-size: 30px;
		line-height: calc(45 / 30) 45px;
	}
`
export const CheckWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`
export const Expense = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: calc(24 / 16);
	color: ${props => props.checkedBox && !props.activeOption ? "var(--neutral-color)" : "var(--expense-text-color)"};
`
export const Income = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: calc(24 / 16);
	color: ${props => props.checkedBox && !props.activeOption ? "var(--incom-text-color)" : "var(--neutral-color)"};
`
export const CastomCheckboxWrapp = styled.div`
	position: relative;
	width: 80px;
	height: 40px;
`
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CastomCheckbox = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	border: 1px solid #E0E0E0;
	border-radius: 30px;
	transition: all var(--animation);

	&::before{
		content: ${props => props.checkedBox ? `url(${Plus})` : `url(${Minus})`};
		position: absolute;
		top: -2px;
		left: -4px;
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: ${props => props.checkedBox ? "var(--incom-text-color)" : "var(--expense-text-color)"};
		transform: ${props => props.checkedBox ? "translateX(0%)" : "translateX(100%)"};
		box-shadow: ${props => props.checkedBox ? "0px 6px 15px rgba(36, 204, 167, 0.5)" : "0px 6px 15px rgba(255, 101, 150, 0.5)"};
		transition: all var(--animation);
	}
`
export const Form = styled.form`
	margin: 40px 0 0;
`
export const InputWrapper = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (min-width: 768px)  {
		flex-direction: row;
		gap: 32px;
	}
`
export const DateInput = styled(Datetime)`
	position: relative;
	font-weight: 700;
	font-size: 18px;
	line-height: calc(27 / 18);

	input{
		padding: 8px 20px;
		border: none;
		outline: none;
		border-bottom:  1px solid #E0E0E0;
		width: 100%;
		font-family: 'Circe';
		font-size: 18px;
		line-height: calc(27 / 18);
	}

	&::after{
		content: url(${Calendar});
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: all;
	}

	@media (min-width: 768px)  {
		width: 181px;
	}
`
export const InputField = styled.input`
	display: block;
	padding: 8px 20px;
	border: none;
	border-bottom:  1px solid #E0E0E0;
	width: 100%;
	outline: none;
	font-weight: 700;
	font-size: 18px;
	line-height: calc(27 / 18);

	&:focus{
		border-color: var(--accent-color);
	}

	@media (min-width: 768px)  {
		width: 190px;
		text-align: center;
	}

`
export const Comment = styled.textarea`
	margin: 40px 0 0;
	resize: none;
	width: 100%;
	height: 84px;
	border: none;
	border-bottom:  1px solid var(--neutral-color);
	padding: 8px 20px;
	outline: none;
	font-size: 18px;
	line-height: calc(27 / 18);
	transition: border-color var(--animation);

	&:focus{
		border-color: var(--accent-color);
	}

	@media (min-width: 768px)  {
		height: 32px;
		padding: 0px 20px;
	}
`
export const SubmitBtn = styled.button`
	margin: 40px 0 0;
	width: 300px;
	padding: 13px 0;
	background-color: var(--accent-color);
	border: 1px solid transparent;
	border-radius: 20px;
	color: var(--light-text-color);
	font-size: 18px;
	line-height: calc(27 / 18);
	letter-spacing: 0.1em;
	text-transform: uppercase;
	transition: background-color var(--animation), color var(--animation), border-color var(--animation);

	:hover, :focus{
		background-color: var(--main-bg-color);
		color: var(--accent-color);
		border-color: var(--accent-color);
	}
`
export const CancelBtn = styled.button`
	margin: 20px 0 0;
	width: 300px;
	padding: 13px 0;
	background-color: var(--main-bg-color);
	border: 1px solid var(--search-text-color);
	border-radius: 20px;
	color: var(--search-text-color);
	font-size: 18px;
	line-height: calc(27 / 18);
	letter-spacing: 0.1em;
	text-transform: uppercase;
	transition: background-color var(--animation), color var(--animation);

	:hover, :focus{
		background-color: var(--search-text-color);
		color: var(--light-text-color);
	}
`
export const SelectorWrapper = styled.div`
	margin: 40px 0 0;
	position: relative;
`
export const Selector = styled.div`
	padding: 8px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom:  1px solid var(--neutral-color);
	font-size: 18px;
	line-height: calc(27 / 18);
	color: #BDBDBD;
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

