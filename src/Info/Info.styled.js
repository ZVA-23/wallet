import styled from "styled-components";

export const InfoParagraf = styled.p`
	font-family: 'Poppins',sans-serif;
	font-size: 18px;
	line-height: calc(36 / 24);
	color: var(--main-text-color);
	margin-top: 20px;
	display: flex;
	justify-content: center;

	@media (min-width: 768px) {
		font-size: 24px;
  }
  @media (min-width: 1280px) {
		align-items: center;
	}
`