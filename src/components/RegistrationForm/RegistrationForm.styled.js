import styled from 'styled-components';
import frametablet from '../../images/frame-registration/frametablet.png';
import framedesctop from '../../images/frame-registration/framedesctop.png';

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

  @media screen and (min-width: 768px) {
    padding-top: 400px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 52px;
    padding-left: 51vw;
    padding-right: 7vw;
  }
`;

export const BtnContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const CreateRegisterPage = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    background-repeat: no-repeat;

    background-image: url(${frametablet});
    width: 273.93px;
    height: 250px;
    left: 50%;
    top: 60px;
    transform: translateX(-70%);
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    display: block;
    background-repeat: no-repeat;

    background-image: url(${framedesctop});
    background-size: cover;
    width: 410px;
    height: 412px;
    left: 50%;
    top: 153px;
    transform: translateX(-110%);
  }
`;
