import styled from "styled-components";
import { ReactComponent as MainImage } from '../../images/registration/registration-image.svg';

export const Image = styled(MainImage)`
	@media (min-width: 768px) {
		width: 274px;
		height: 250px;
  }

  @media (min-width: 1280px) {
	width: 452px;
	height: 413px;
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

export const PageTitle = styled.h1`
	margin: 30px 0 0;
	text-align: center;
	font-family: 'Poppins';
	font-size: 30px;
	line-height: calc(45 / 30);
	font-weight: 400;
`

export const RegisterFormContainer = styled.div`
  

  @media (min-width: 768px) {
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