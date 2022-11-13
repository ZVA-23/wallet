import { useState } from "react";
import { Currency } from "components/Currency/Currency";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { Modal } from "../../components/Modal/Modal";
import { ModalAddTransactions } from "components/ModalAddTransaction/ModalAddTransaction";
import { ButtonAddTransactions } from "components/ButtonAddTransactions/ButtonAddTransactions";
import { ModalLogout } from "components/ModalLogout/ModalLogout";
import { Main } from "components/Main/Main";
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { Balance } from "components/Balance/Balance";

import { NavAndInfoWrapper } from "./DashboardPage.styled";
import { HomeTab } from "components/HomeTab/HomeTab";


const DashboardPage = () => {
	const [isModalTransactionOpen, setIsModalTransactionOpen] = useState(false);
	const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);

	const handleAddTransactionModal = () => {
		setIsModalTransactionOpen(!isModalTransactionOpen)
	}

	const handleLogoutModal = () => {
		setIsModalLogoutOpen(!isModalLogoutOpen)
	}

	return <>
		<Main>
			<Section>
				<Container>
					<NavAndInfoWrapper>
						<div>
							<Balance />
						</div>
						<Currency />
					</NavAndInfoWrapper>
					<HomeTab />
				</Container>
			</Section>
			{isModalTransactionOpen && <Backdrop showModalHandler={handleAddTransactionModal}>
				<Modal>
					{<ModalAddTransactions showModalHandler={handleAddTransactionModal} />}
				</Modal>
			</Backdrop>}
			{isModalLogoutOpen && <Backdrop showModalHandler={handleLogoutModal}>
				<Modal>
					{<ModalLogout showModalHandler={handleLogoutModal} />}
				</Modal>
			</Backdrop>}
			<ButtonAddTransactions showModalHandler={handleAddTransactionModal} />
		</Main>
	</>
};

export default DashboardPage;
