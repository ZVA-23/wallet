import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { ReactComponent as Logo } from '../../images/svg/logoWallet.svg';
import { ReactComponent as IconLogout } from '../../images/svg/exit.svg';
import { Bg, StyledHeader, Wrapper } from './Header.styled';
import { Container } from 'components/Container/Container';
import { logOut } from 'redux/auth/operations';

export const Header = () => {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <Container>
      <Bg />
      <StyledHeader>
        <Logo />
        <Wrapper gap="1rem">
          {user.username} <span>|</span>{' '}
          <button type="button" onClick={() => dispatch(logOut())}>
            <Wrapper gap="0.5rem">
              <IconLogout /> Exit{' '}
            </Wrapper>
          </button>
        </Wrapper>
      </StyledHeader>
    </Container>
  );
};
