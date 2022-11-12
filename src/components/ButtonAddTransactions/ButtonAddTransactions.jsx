import { ReactComponent as AddIcon } from "../../icons/add-transactions/plus.svg";
import { AddButton } from "./ButtonAddTransactions.styled"

export const ButtonAddTransactions = ({ showModalHandler }) => {
	const onButtonClick = () => {
		showModalHandler()
	}

	return <AddButton type="button" onClick={onButtonClick}><AddIcon /></AddButton>
}