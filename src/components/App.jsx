import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/selectors';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout';
import { HomeTab } from './HomeTab/HomeTab';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const StatisticsSubPage = lazy(() =>
  import('pages/StatisticsSubPage/StatisticsSubPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="home"
            element={
              <PrivateRoute redirectTo="/login" component={<HomePage />} />
            }
          >
            <Route
              index
              element={
                <PrivateRoute redirectTo="/login" component={<HomeTab />} />
              }
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<StatisticsSubPage />}
                />
              }
            />
          </Route>
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </>
  );
};
