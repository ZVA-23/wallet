import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { selectAuth } from 'redux/selectors';
import { Header } from './Header/Header';

export const Layout = () => {
	const { isLoggedIn } = useSelector(selectAuth);

	return (<>
		{isLoggedIn && <Header />}
		<Suspense fallback={null}>
			<Outlet />
		</Suspense>
		<ToastContainer position="bottom-center" autoClose={2000} />
	</>
	);
};
