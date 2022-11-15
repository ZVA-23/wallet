// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectTransactions } from 'redux/selectors';
// import { Main } from 'components/Main/Main';
// import { Section } from 'components/Section/Section';
// import { Container } from 'components/Container/Container';
// import { Balance } from 'components/Balance/Balance';
// import { Currency } from 'components/Currency/Currency';
// import { Info } from 'Info/Info';
// import { HomeTab } from 'components/HomeTab/HomeTab';
// import { Backdrop } from '../../components/Backdrop/Backdrop';
// import { Modal } from '../../components/Modal/Modal';
// import { ModalAddTransactions } from 'components/ModalAddTransaction/ModalAddTransaction';
// import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';
// import { NavAndInfoWrapper, HomePageWrapper } from './StatissticsSubPage.styled';
// import {
//   getAllTransactions,
//   getTransactionCategories,
// } from 'redux/transactions/operations';
// import { Navigation } from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
// import { Header } from 'components/Header/Header';

const StatisticsSubPage = () => {

	return (
		<>
			<DiagramTab />
		</>
	)
}

export default StatisticsSubPage;

