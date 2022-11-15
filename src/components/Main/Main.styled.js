import styled from "styled-components";
import LoginBG from "../../images/registration/login-bg.png";
import TabletBG from "../../images/registration/tablet-bg.svg";
import MainBgTablet from "../../images/background/background.png"
import MainBgDesk from "../../images/background/background-desk.png"

export const MainTag = styled.main`
	background: ${p => {
		if (p.location === "/register" || p.location === "/login") {
			return "var(--main-bg-color)"
		}
		if (p.location === "/home" || p.location === "/statistics" || p.location === "/currency") {
			return "#E7EAF2"
		}
	}};
	min-height: 100vh;
	
	@media (min-width: 768px) {
		background: ${p => {
		if (p.location === "/register" || p.location === "/login") {
			return `url(${TabletBG})`
		}
		if (p.location === "/home" || p.location === "/statistics") {
			return `url(${MainBgTablet})`
		}
	}} ;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
  }

  @media (min-width: 1280px) {
	background: ${p => {
		if (p.location === "/register" || p.location === "/login") {
			return `url(${LoginBG})`
		}
		if (p.location === "/home" || p.location === "/statistics") {
			return `url(${MainBgDesk})`
		}
	}} ;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		min-height:  ${p => {
		if (p.location === "/register") {
			return "100vh"
		}
		if (p.location === "/home" || p.location === "/statistics") {
			return "calc(100vh - 88px)"
		}
	}} ;
  }
`



