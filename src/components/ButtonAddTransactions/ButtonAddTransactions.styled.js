import styled from "styled-components";

export const AddButton = styled.button`
	position: absolute;
	right: 20px;
	bottom: 0;
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

	@media (min-width: 768px) {
	 right: 32px;
	 bottom: -40px;
  }
  @media (min-width: 1280px) {
	 right: 16px;
	 bottom: 1%;
  }
`