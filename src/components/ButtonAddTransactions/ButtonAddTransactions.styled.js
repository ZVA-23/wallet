import styled from "styled-components";

export const AddButton = styled.button`
	position: fixed;
	right: 40px;
	bottom: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background-color: var(--accent-color);
	transition: transform var(--animation);

	:hover, :focus{
		transform: scale(1.3);
	}
`