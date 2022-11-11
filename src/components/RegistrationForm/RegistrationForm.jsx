import React from 'react';
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
// import styled from 'styled-components';
import { RegisteredFormContainer } from './RegistrationForm.styled';
// import { Container } from 'components/Container/Container';
export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ username, email, password }));
    setUsername('');
    setEmail('');
    setPassword('');
  };
  const validation = Yup.object({
    username: Yup.string()
      .min(1, 'Name must be at least 1 character')
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 character')
      .max(12, 'Must be 12 characters or less')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });
  return (
    <Formik
      initialValues={{ username, email, password }}
      validationSchema={validation}
    >
      <Form onSubmit={handleSubmit}>
        {' '}
        <RegisteredFormContainer>
          <p>Wallet</p>
          <TextField
            type="email"
            name="email"
            label="E-mail"
            color="primary"
            value={email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
          <TextField
            type="password"
            name="password"
            label="Пароль"
            value={password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
          <TextField
            type="password"
            name="confirmPassword"
            label="Подтвердите пароль"
            value={password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
          <TextField
            type="text"
            name="username"
            label="Ваше имя"
            value={username}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
          <Link to="/login">
            <Button type="submit" variant="outlined">
              Login
            </Button>
          </Link>

          <Button type="submit" variant="outlined">
            Регистрация
          </Button>
        </RegisteredFormContainer>{' '}
      </Form>
    </Formik>
  );
};

/* <form onSubmit={handleSubmit}> */

/* <TextField
        label="Name:"
        variant="outlined"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <TextField
        label="Email:"
        variant="outlined"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <TextField
        label="Password:"
        variant="outlined"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />  */

//           <Button type="submit" variant="outlined">
//             Register
//           </Button>
//           {/* </form> */}
//         </Form>
//       )}
//     </Formik>
//   );
// };
