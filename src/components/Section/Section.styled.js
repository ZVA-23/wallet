import styled from "styled-components";

export const SectionTag = styled.section`
	padding: 12px 0 48px;

	@media (min-width: 768px) {
		padding: 32px 0 40px;
  }

  @media (min-width: 1280px) {
		padding: ${p => {
		if (p.location === "/register" || p.location === "/login") {
			return;
		} else {
			return "40px 0 30px"
		}
	}};
	
	min-height: ${p => {
		if (p.location === "/register" || p.location === "/login") {
			return "100vh"
		} else {
			return;
		}
	}};
	
	display: ${p => {
		if (p.location === "/register" || p.location === "/login") {
			return "flex"
		} else {
			return;
		}
	}};
	align-items: ${p => {
		if (p.location === "/register" || p.location === "/login") {
			return "center"
		} else {
			return;
		}
	}};
	
  }
`