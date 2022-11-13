import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { ModalLogoutWrapper, Text, LogoutBtn, CancelBtn } from "./ModalLogout.styled"

export const ModalLogout = ({ showModalHandler }) => {
	const dispatch = useDispatch();

	const onClose = () => {
		showModalHandler()
	}

	const handlerLogOut = () => {
		dispatch(logOut());
		showModalHandler();
	}

	return <ModalLogoutWrapper>
		<Text>Do you want to log out?</Text>
		<LogoutBtn type="button" onClick={handlerLogOut}>Log out</LogoutBtn>
		<CancelBtn type="button" onClick={onClose}>Cancel</CancelBtn>
	</ModalLogoutWrapper>
}