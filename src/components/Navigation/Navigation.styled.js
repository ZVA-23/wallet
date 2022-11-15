import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Ul = styled.ul`
    display: flex;
	 gap: 30px;
	 justify-content: center;
	 align-items: center;

	 @media (min-width: 768px) {
		flex-direction: column;
		align-items: start;
		gap: 0;
  }
`

export const StyledNavLink = styled(NavLink)`
		svg{
			transition:  transform var(--animation);
			fill: #6E78E8;
		}
		
		svg:hover, :focus{
			transform: scale(1.2);
		}

		&.active svg{
			fill: #4A56E2;
		}
	
	  @media (min-width: 768px) {
		color: inherit;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 20px;
		font-size: 18px;
		font-weight: 400;
		line-height: calc(27 / 18);
		&.active {
			font-weight: 700;
		}
  }
`