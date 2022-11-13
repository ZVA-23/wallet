import styled from 'styled-components';

// import { ReactComponent as Lock } from '../../icons/lock.svg';

export const InputField = styled.input`
content: "";
  display: block;
  padding: 8px 20px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  outline: none;
  /* font-weight: 700; */
  font-size: 18px;
  line-height: calc(27 / 18);

  &:focus {
    border-color: var(--accent-color);
  }

  /* @media (min-width: 768px)  {
		width: 190px;
		text-align: center;
	} */
    
    background-image: url("../icons/lock.svg");
    background-repeat: no-repeat;
    background-position: center;
  
`;

//  export const Field = styled.div `
//  position: relative;
//  `

// export const InputLock = styled.Lock `
// position: absolute;
// top: 50%;
// `

export const InActiveBtn = styled.button`
	/* margin: 40px 0 0; */
	width: 300px;
	padding: 13px 0;
	background-color: #ffffff;
	border-radius: 20px;
    outline: 2px solid #4A56E2;
    color: #4A56E2;
	font-size: 18px;
	line-height: calc(27 / 18);
	letter-spacing: 0.1em;
	text-transform: uppercase;
`
export const ActiveBtn = styled.button`
	/* margin: 40px 0 0; */
	width: 300px;
	padding: 13px 0;
	background-color: var(--accent-color);
	border-radius: 20px;
	color: var(--light-text-color);
	font-size: 18px;
	line-height: calc(27 / 18);
	letter-spacing: 0.1em;
	text-transform: uppercase;
`

export const RegisterFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;
