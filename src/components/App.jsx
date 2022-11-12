// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { refreshUser } from 'redux/auth/operations';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegistrationForm/RegistrationForm';
import { Backdrop } from './Backdrop/Backdrop';
import { Modal } from './Modal/Modal';
import { ModalAddTransactions } from './ModalAddTransaction/ModalAddTransaction';



export const App = () => {
	const dispatch = useDispatch();


	return (<>
		<Backdrop>
			<Modal><ModalAddTransactions /></Modal>
		</Backdrop>
		<RegisterForm />
		<LoginForm />
	</>
		//  <div
		//    style={{
		//      height: '100vh',
		//      display: 'flex',
		//      justifyContent: 'center',
		//      alignItems: 'center',
		//      fontSize: 40,
		//      color: '#010101',
		//    }}
		//  >
		// <RegisterForm/>
		// <LoginForm/>
		//  </div>
	);
};
