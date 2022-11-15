import styled from 'styled-components';

export const Logo = styled.img`
	margin-bottom: 60px;
`
export const InputContainer = styled.label`
  position: relative;
  svg {
    position: absolute;
    top: 8px;
    width: 24px;
    height: 24px;
    fill: #e0e0e0;
    left: 10px;
  }
`;

export const ConfirmPasswordLabel = styled.label`
  position: relative;
  svg {
    position: absolute;
    top: 8px;
    width: 24px;
    height: 24px;
    fill: #e0e0e0;
    left: 10px;
  }
  :after {
    opacity: ${props => (props.progressPassword ? '1' : '0')};
    width: ${props =>
		`${(props.confirmPassword.length / props.password.length) * 100}%`};

    background-color: ${props =>
		props.password === props.confirmPassword ? 'var(--accent-color)' : 'red'};

    content: '';
    position: absolute;
    height: 4px;

    left: 0px;
    bottom: -5px;
  }
`;

export const InputField = styled.input`
  display: block;
  padding: 8px 55px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  outline: none;

  font-size: 18px;
  line-height: calc(27 / 18);
  margin-right: 20px;
  border-radius: 20px;

  &:focus {
    border-color: var(--accent-color);
  }
`;

export const InActiveBtn = styled.button`
  width: 300px;
  padding: 13px 0;
  background-color: #ffffff;
  border-radius: 20px;
  outline: 1px solid #4a56e2;
  color: #4a56e2;
  font-size: 18px;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:hover {
    background-color: var(--search-text-color);
    color: var(--light-text-color);
    outline: none;
  }
`;
export const ActiveBtn = styled.button`
  width: 300px;
  padding: 13px 0;
  background-color: var(--accent-color);
  border-radius: 20px;
  color: var(--light-text-color);
  font-size: 18px;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:hover {
    background-color: var(--search-text-color);
    color: var(--light-text-color);
  }

`;

export const Form = styled.form`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-bg-color);

  @media screen and (min-width: 768px) {
    padding: 40px 65px 66px;
	 border-radius: 20px;
	 width: 533px;
  }

  @media screen and (min-width: 1280px) {
    
  }
`;

export const BtnContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

