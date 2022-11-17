import styled from 'styled-components';

export const FormWrapper = styled.div`
	padding: 32px 0;
	background-color: var(--main-bg-color);

	@media screen and (min-width: 768px) {
    padding: 40px 65px 66px;
	 border-radius: 20px;
	 width: 533px;
  }
`
export const Logo = styled.img`
	margin: 0 auto 60px;
`
export const InputContainer = styled.label`
  position: relative;
  display: block;
  margin-top: 40px;

  :first-child{
	margin-top: 0;
  }

  :last-child{
	margin-top: 32px;
  }
  
  svg {
    position: absolute;
    top: 0;
    width: 24px;
    height: 24px;
    fill: #e0e0e0;
    left: 10px;
  }
`;

export const ConfirmPasswordLabel = styled.label`
  position: relative;
  display: block;
  margin-top: 40px;
  svg {
    position: absolute;
    top: 0;
    width: 24px;
    height: 24px;
    fill: #e0e0e0;
    left: 10px;
  }
  :after {
    opacity: ${props => (props.progressPassword ? '1' : '0')};
    width: ${props =>
		`${(props.confirmPassword.length / props.password.length) * 100}%`};
		max-width: 100%;
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
  padding: 0px 55px 8px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  outline: none;

  font-size: 18px;
  line-height: calc(27 / 18);

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
  transition: background-color var(--animation), color var(--animation);
  margin-top: 20px;

	:hover, :focus{
		background-color: var(--search-text-color);
		color: var(--light-text-color);
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
  border: 1px solid transparent;
  transition: background-color var(--animation), color var(--animation), border-color var(--animation);

	:hover, :focus{
		background-color: var(--main-bg-color);
		color: var(--accent-color);
		border-color: var(--accent-color);
	}
`;

export const Form = styled.form`
`;

export const BtnContainer = styled.div`
	 margin-top: 40px;
	 text-align: center;
`;

