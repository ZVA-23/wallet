import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { selectAuth } from 'redux/selectors';
import { Container } from './Container/Container';
import { UserPanel } from './UserPanel/UserPanel';

export const Layout = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <Container style={{ minHeight: '100vh' }}>
      {isLoggedIn && <UserPanel />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </Container>
  );
};
