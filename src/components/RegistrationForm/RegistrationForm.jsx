import { validate } from 'indicative/validator';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import logoWallet from '../../images/svg/logoWallet.svg';
import { toast } from 'react-toastify';
import { IoMdMail } from 'react-icons/io';
import { MdLock } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import {
	InputField,
	Form,
	BtnContainer,
	ActiveBtn,
	InActiveBtn,
	InputContainer,
	ConfirmPasswordLabel,
	Logo,
	FormWrapper
} from './RegistrationForm.styled';

export const RegisterForm = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [text, setText] = useState(false);

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
				setText(true);
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
			}).then(() => toast.success('You have been registrated'))
			.catch(() => toast.error('You have some invalid fields!'));
	};

	return (<FormWrapper>
		<Logo src={logoWallet} alt="Wallet" width="181" height="40" />
		<Form onSubmit={handleSubmit}>
			<InputContainer>
				<IoMdMail />
				<InputField
					type="email"
					name="email"
					color="primary"
					placeholder="E-mail"
					value={email}
					onChange={handleChange}
				/>
			</InputContainer>
			<InputContainer>
				<MdLock />
				<InputField
					type="password"
					name="password"
					value={password}
					placeholder="Password"
					onChange={handleChange}
				/>
			</InputContainer>
			<ConfirmPasswordLabel
				progressPassword={text}
				password={password}
				confirmPassword={confirmPassword}
			>
				<MdLock />
				<InputField
					type="password"
					name="confirmPassword"
					placeholder="Confirm password"
					value={confirmPassword}
					onChange={handleChange}
				/>
			</ConfirmPasswordLabel>
			<InputContainer>
				<IoPersonSharp />
				<InputField
					type="text"
					name="username"
					placeholder="First name"
					value={username}
					onChange={handleChange}
				/>
			</InputContainer>
			<BtnContainer>
				<ActiveBtn type="submit">Register</ActiveBtn>
				<Link to="/login">
					<InActiveBtn variant="outlined">Log in</InActiveBtn>
				</Link>
			</BtnContainer>
		</Form>
	</FormWrapper>
	);
};
