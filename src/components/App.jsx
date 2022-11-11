//import { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
//import { refreshUser } from 'redux/auth/operations';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegistrationForm/RegistrationForm';

export const App = () => {
  //const dispatch = useDispatch();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <RegisterForm />
      <LoginForm />
    </div>
  );
};
