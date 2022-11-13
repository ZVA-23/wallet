import { ModalLogoutWrapper, Text, LogoutBtn, CancelBtn } from "./ModalLogout.styled"

export const ModalLogout = () => {
	return <ModalLogoutWrapper>
		<Text>Do you want to log out?</Text>
		<LogoutBtn type="button">Log out</LogoutBtn>
		<CancelBtn type="button">Cancel</CancelBtn>
	</ModalLogoutWrapper>
}