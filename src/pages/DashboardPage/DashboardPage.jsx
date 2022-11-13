import { useState } from "react";
import { Currency } from "components/Currency/Currency";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { Modal } from "../../components/Modal/Modal";
import { ModalAddTransactions } from "components/ModalAddTransaction/ModalAddTransaction";
import { ButtonAddTransactions } from "components/ButtonAddTransactions/ButtonAddTransactions";
import { ModalLogout } from "components/ModalLogout/ModalLogout";

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
		<Currency />
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
	</>
};

export default DashboardPage;
