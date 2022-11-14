import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';
import { Main } from 'components/Main/Main';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Info } from 'Info/Info';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { Backdrop } from '../../components/Backdrop/Backdrop';
import { Modal } from '../../components/Modal/Modal';
import { ModalAddTransactions } from 'components/ModalAddTransaction/ModalAddTransaction';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { NavAndInfoWrapper, HomePageWrapper } from './HomePage.styled';
import {
  getAllTransactions,
  getTransactionCategories,
} from 'redux/transactions/operations';
import { Navigation } from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import StatisticsSubPage from 'pages/StatisticsSubPage/StatisticsSubPage';

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const transactions = useSelector(selectTransactions);

  const [isModalTransactionOpen, setIsModalTransactionOpen] = useState(false);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);

  useEffect(() => {
    dispatch(getTransactionCategories());
    dispatch(getAllTransactions());
  }, [dispatch]);

  const findCurrentPath = () => {
    const array = location.pathname.split('/');
    return array[array.length - 1];
  };

  const handleAddTransactionModal = () => {
    setIsModalTransactionOpen(!isModalTransactionOpen);
  };

  const handleLogoutModal = () => {
    setIsModalLogoutOpen(!isModalLogoutOpen);
  };

  return (
    <>
      <Main>
        <Section>
          <Container>
            <HomePageWrapper>
              <NavAndInfoWrapper>
                <Navigation />
                <div>
                  <Balance />
                </div>
                <Currency />
              </NavAndInfoWrapper>
              {findCurrentPath() === 'statistics' ? (
                <StatisticsSubPage />
              ) : transactions.items.length > 0 ? (
                <HomeTab />
              ) : (
                <Info text="Here will be your transactions." />
              )}
            </HomePageWrapper>
          </Container>
        </Section>
        {isModalTransactionOpen && (
          <Backdrop showModalHandler={handleAddTransactionModal}>
            <Modal>
              {
                <ModalAddTransactions
                  showModalHandler={handleAddTransactionModal}
                />
              }
            </Modal>
          </Backdrop>
        )}
        {isModalLogoutOpen && (
          <Backdrop showModalHandler={handleLogoutModal}>
            <Modal>
              {<ModalLogout showModalHandler={handleLogoutModal} />}
            </Modal>
          </Backdrop>
        )}
        <ButtonAddTransactions showModalHandler={handleAddTransactionModal} />
      </Main>
    </>
  );
};

export default HomePage;
