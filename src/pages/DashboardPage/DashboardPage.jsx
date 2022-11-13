import { useState } from "react";
import { Currency } from "components/Currency/Currency";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { Modal } from "../../components/Modal/Modal";
import { ModalAddTransactions } from "components/ModalAddTransaction/ModalAddTransaction";
import { ButtonAddTransactions } from "components/ButtonAddTransactions/ButtonAddTransactions";

import { ModalLogout } from "components/ModalLogout/ModalLogout";

const DashboardPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAddTransactionModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return <>
		<Currency />
		{isModalOpen && <Backdrop showModalHandler={handleAddTransactionModal}>
			<Modal>
				{/* <ModalAddTransactions showModalHandler={handleAddTransactionModal} /> */}
				<ModalLogout />
			</Modal>
		</Backdrop>}
		<ButtonAddTransactions showModalHandler={handleAddTransactionModal} />
	</>
};

export default DashboardPage;
