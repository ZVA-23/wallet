import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { selectAuth } from 'redux/selectors';
import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { UserPanel } from './UserPanel/UserPanel';
// import {Main} from "./Main/Main"

export const Layout = () => {
	const { isLoggedIn } = useSelector(selectAuth);
	return (<>
		{/* <Container> */}
		{/* <div style={{ minHeight: '100vh' }}> */}
		{isLoggedIn && <Header />}
		{/* <div className="wrapper"> */}
		{isLoggedIn && <UserPanel />}
		<Suspense fallback={null}>
			<Outlet />
		</Suspense>
		{/* </div> */}
		{/* </div> */}
		<ToastContainer position="bottom-center" autoClose={2000} />
		{/* </Container> */}
	</>
	);
};
