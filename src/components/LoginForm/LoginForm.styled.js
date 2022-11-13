import styled from "styled-components";

export const LoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;`

export const EnterForm = styled.form`
gap: 20px;
display: flex;
flex-direction: column;
align-items: center;`

export const InActiveBtn = styled.button`
	/* margin: 40px 0 0; */
	width: 300px;
	padding: 13px 0;
	background-color: #ffffff;
	border-radius: 20px;
    outline: 2px solid #4A56E2;
    color: #4A56E2;
	font-size: 18px;
	line-height: calc(27 / 18);
	letter-spacing: 0.1em;
	text-transform: uppercase;
`
export const ActiveBtn = styled.button`
	/* margin: 40px 0 0; */
	width: 300px;
	padding: 13px 0;
	background-color: var(--accent-color);
	border-radius: 20px;
	color: var(--light-text-color);
	font-size: 18px;
	line-height: calc(27 / 18);
	letter-spacing: 0.1em;
	text-transform: uppercase;
`

export const InputField = styled.input`
	display: block;
	padding: 8px 20px;
	border: none;
	border-bottom:  1px solid #E0E0E0;
	width: 100%;
	outline: none;
	/* font-weight: 700; */
	font-size: 18px;
	line-height: calc(27 / 18);

	&:focus{
		border-color: var(--accent-color);
	}

	/* @media (min-width: 768px)  {
		width: 190px;
		text-align: center;
	} */

`