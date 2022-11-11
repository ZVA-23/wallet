import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';


export const App = () => {
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

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
			React homework template
		</div>
	);
};
