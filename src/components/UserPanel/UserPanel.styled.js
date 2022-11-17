import styled from "styled-components";

export const NavAndInfoWrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
  }

  @media (min-width: 1280px) {
	position: relative;
    flex-direction: column;
	 gap: 30px;

	 position: relative;
	::after{
		content: "";
		position: absolute;
		top: -40px;
		right: -69px;
		height: calc(100vh - 88px);
		width: 1px;
		background-color: #E7E5F2;
		box-shadow: 1px 0px 0px rgba(255, 255, 255, 0.6);
	}
  }

`