import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { ReactComponent as Logo } from '../../images/svg/logoWallet.svg';
import { ReactComponent as LogoMobile } from '../../images/svg/logo-mobile.svg';
import { ReactComponent as IconLogout } from '../../images/svg/exit.svg';
import {
	StyledHeader,
	Wrapper,
	HeaderWrapper,
	LogOutWrapper,
} from './Header.styled';
import { useMedia } from 'react-use';
import { Container } from 'components/Container/Container';
import { Modal } from 'components/Modal/Modal';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { Backdrop } from 'components/Backdrop/Backdrop';

export const Header = () => {
	const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
	const { user } = useSelector(selectAuth);
	const dispatch = useDispatch();
	const isMobile = useMedia('(max-width: 768px)');

	const handleLogoutModal = () => {
		setIsModalLogoutOpen(!isModalLogoutOpen);
	};

	return (<>
		<StyledHeader>
			<Container>
				<HeaderWrapper>
					{isMobile ? <LogoMobile /> : <Logo />}
					<LogOutWrapper>
						{user.username}
						<button type="button" onClick={() => dispatch(handleLogoutModal)}>
							<Wrapper>
								<IconLogout /> {!isMobile && 'Exit'}
							</Wrapper>
						</button>
					</LogOutWrapper>
				</HeaderWrapper>
			</Container>
		</StyledHeader>
		{isModalLogoutOpen && (
			<Backdrop showModalHandler={handleLogoutModal}>
				<Modal>
					{<ModalLogout showModalHandler={handleLogoutModal} />}
				</Modal>
			</Backdrop>
		)}
	</>
	);
};
