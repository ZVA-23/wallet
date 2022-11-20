import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { selectAuth } from 'redux/selectors';
import { Header } from './Header/Header';
import { selectTransactions } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { Backdrop } from './Backdrop/Backdrop';

export const Layout = () => {
	const { isLoggedIn } = useSelector(selectAuth);
	const transactions = useSelector(selectTransactions);

	return (<>
		{transactions.isLoading && <Backdrop><Loader /></Backdrop>}
		{isLoggedIn && <Header />}
		<Suspense fallback={null}>
			<Outlet />
		</Suspense>
		<ToastContainer position="bottom-center" autoClose={2000} />
	</>
	);
};
