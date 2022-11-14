import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const EnterForm = styled.form`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.label`
  position: relative;
  /* padding-left: 40px; */

  svg {
    position: absolute;
    top: 8px;
    width: 24px;
    height: 24px;
    fill: #e0e0e0;
    left: 10px;
  }
`;

export const InActiveBtn = styled.button`
  /* margin: 40px 0 0; */
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
    background-color: var(--accent-color);
    color: var(--light-text-color);
    outline: none;
  }
`;
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
`;

export const InputField = styled.input`
  display: block;
  padding: 8px 55px;
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
`;
