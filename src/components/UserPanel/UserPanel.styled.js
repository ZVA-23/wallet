import styled from "styled-components";

export const NavAndInfoWrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
	 padding-right: 69px;
	 gap: 30px;
	 border-right: 1px solid #E7E5F2;
	box-shadow: 1px 0px 0px rgba(255, 255, 255, 0.6);
  }

`