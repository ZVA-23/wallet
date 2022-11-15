import styled from "styled-components";

export const SectionTag = styled.section`
	padding: 12px 0 48px;

	@media (min-width: 768px) {
		padding: 32px 0 40px;
  }

  @media (min-width: 1280px) {
		padding: ${p => {
		if (p.location === "/register") {
			return "32px 0 40px"
		} else {
			return "49px 0 55px"
		}
	}};
  }
`