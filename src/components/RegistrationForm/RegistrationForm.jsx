import { validate } from 'indicative/validator';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import logoWallet from '../../images/svg/logoWallet.svg';
// import lock from '../../icons/lock.svg';
// import { ReactComponent as Lock } from '../../icons/lock.svg';


// import {ReactComponent as LogoEmail} from '../../icons/email.svg';

import { toast } from 'react-toastify';
import {
  InputField,
  // SubmitBtn,
  RegisterFormContainer,
  Form,
  BtnContainer,
  ActiveBtn,
  InActiveBtn,
 
} from './RegistrationForm.styled';

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };
  const schema = {
    username: 'required|alpha',
    password: 'required|min:6|max:12',
    confirmPassword: `equals:${password}`,
    email: 'required|email',
  };
  const handleSubmit = event => {
    event.preventDefault();
    const user = { username, email, password, confirmPassword };
    validate(user, schema)
      .then(() => {
        const { username, email, password } = user;
        dispatch(register({ username, email, password }));
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch(() => toast.error('You have some invalid fields!'));
  };
  return (
    <RegisterFormContainer>
      <Form onSubmit={handleSubmit}>
        <img src={logoWallet} alt="Wallet" width="181" height="40" />
             
      
        <InputField 
          type="email"
          name="email"
          color="primary"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
       
        <InputField
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="username"
          placeholder="First name"
          value={username}
          onChange={handleChange}
        />
        <BtnContainer>
          <ActiveBtn type="submit">Register</ActiveBtn>
          <Link to="/login">
            <InActiveBtn variant="outlined">Log in</InActiveBtn>
          </Link>
        </BtnContainer>
      </Form>
    </RegisterFormContainer>
  );
};
