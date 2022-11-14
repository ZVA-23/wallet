import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
};
