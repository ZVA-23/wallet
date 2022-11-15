import styled from "styled-components";
import { ReactComponent as MainImage } from '../../images/login/login-image.svg';


export const LoginWrapper = styled.div`
	padding: 107px 0;
	text-align: center;


	@media (min-width: 768px) {
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 50px;
	align-items: center;
  }

  @media (min-width: 1280px) {
	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  }
`
export const ImageAndTitleWrapper = styled.div`
	display: none;
	
	@media (min-width: 768px) {
	display: flex;
	gap: 40px;
	align-items: center;
  }

  @media (min-width: 1280px) {
	display: block;
  }
`

export const Image = styled(MainImage)`
	@media (min-width: 768px) {
		width: 260px;
		height: 250px;
  }

  @media (min-width: 1280px) {
		width: 435px;
		height: 420px;
  }
`

export const PageTitle = styled.h1`
	margin: 30px 0 0;
	text-align: center;
	font-family: 'Poppins';
	font-size: 30px;
	line-height: calc(45 / 30);
	font-weight: 400;
`