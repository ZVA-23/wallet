import styled from "styled-components";

export const ModalLogoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0px 15px;
	text-align: center;

`
export const Text = styled.p`
	font-family: 'Poppins', sans-serif;
	font-size: 24px;
	line-height: calc(36 / 24);
	color: var(--main-text-color);

	@media (min-width: 768px)  {
		font-size: 30px;
		line-height: calc(45 / 30) 45px;
	}
`
export const LogoutBtn = styled.button`
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