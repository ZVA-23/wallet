import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/selectors';
import { getTransactionCategories } from 'redux/transactions/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getTransactionCategories());
  }, [dispatch]);

  if (isRefreshing) return <div className="text-center">Refreshing user...</div>;
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/dashboard" component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/dashboard" component={<LoginPage />} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute redirectTo="/login" component={<DashboardPage />} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
