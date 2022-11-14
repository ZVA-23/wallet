import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { ReactComponent as Logo } from '../../images/svg/logoWallet.svg';
import { ReactComponent as LogoMobile } from '../../images/svg/logo-mobile.svg'
import { ReactComponent as IconLogout } from '../../images/svg/exit.svg';
import { StyledHeader, Wrapper, HeaderWrapper, LogOutWrapper } from './Header.styled';
import { Container } from 'components/Container/Container';
import { logOut } from 'redux/auth/operations';
import { useMedia } from 'react-use';

export const Header = () => {
	const { user } = useSelector(selectAuth);
	const dispatch = useDispatch();
	const isMobile = useMedia('(max-width: 768px)');

	return (< StyledHeader >
		< Container >
			<HeaderWrapper>
				{isMobile ? <LogoMobile /> : <Logo />}
				<LogOutWrapper>
					{user.username}
					<button type="button" onClick={() => dispatch(logOut())}>
						<Wrapper>
							<IconLogout /> {!isMobile && "Exit"}
						</Wrapper>
					</button>
				</LogOutWrapper>
			</HeaderWrapper>
		</Container>
	</StyledHeader >
	);
};
