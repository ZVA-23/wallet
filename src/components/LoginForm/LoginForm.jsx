import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { validate } from 'indicative/validator';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';
import { MdLock } from 'react-icons/md';
import logoWallet from '../../images/svg/logoWallet.svg';
import { LoginContainer, EnterForm, InActiveBtn, InputField, ActiveBtn, InputContainer, Logo } from './LoginForm.styled';


export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
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

	const schema = {
		email: 'email',
		password: 'required|min:6|max:12',
	}

	const handleSubmit = event => {
		event.preventDefault();
		const user = { email, password };
		validate(user, schema)
			.then(() => {
				const { email, password } = user;
				dispatch(logIn({ email, password }));
				setEmail('');
				setPassword('');
			})
			.catch(() => toast.error('You have some invalid fields!'))
	};
	return (
		<LoginContainer>
			<EnterForm onSubmit={handleSubmit}>
				<Logo src={logoWallet} alt="Wallet" width="181" height="40" />
				<InputContainer>
					<IoMdMail />
					<InputField
						id="outlined-basic"
						label="Email:"
						variant="outlined"
						type="email"
						name="email"
						placeholder='E-mail'
						value={email}
						onChange={handleChange}
						required
					/>
				</InputContainer>

				<InputContainer>
					<MdLock />
					<InputField
						id="outlined-basic2"
						label="Password*"
						variant="outlined"
						type="password"
						name="password"
						placeholder='Password'
						value={password}
						onChange={handleChange}
						autoComplete="false"
						required
					/>
				</InputContainer>
				<ActiveBtn type="submit" variant="outlined">
					Login
				</ActiveBtn>
				<Link to="/register">
					<InActiveBtn type="submit" variant="outlined" >Register</InActiveBtn>
				</Link>
			</EnterForm>
		</LoginContainer>
	);
};
