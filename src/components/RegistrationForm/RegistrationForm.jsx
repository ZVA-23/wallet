
import { validate } from 'indicative/validator';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { ReactComponent as LogoWallet } from '../../images/svg/wallet.svg';

import { toast } from 'react-toastify';
import {
  InputField,
  SubmitBtn,
  RegisterFormContainer,
  Form,
  BtnContainer,
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
    password: 'required|min:4|max:40',
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
        <LogoWallet width='20'/>
      
        <p>Wallet</p>
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
        <SubmitBtn type="submit">Register</SubmitBtn>
        <Link to="/login">
          <SubmitBtn variant="outlined">Log in</SubmitBtn>
        </Link>
        </BtnContainer>
      </Form>
    </RegisterFormContainer>
  );
};
