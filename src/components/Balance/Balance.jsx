import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

import {
	BalanceWrap,
	BalanceContent,
	BalanceTitle,
	BalanceTotal,
	BalanceIcon
} from './Balance.styled';

export const Balance = () => {
	const currentBalance = useSelector(selectAuth);

	return (
		<BalanceWrap>
			<BalanceContent>
				<BalanceTitle>Your balance</BalanceTitle>
				<BalanceTotal><BalanceIcon>&#8372;</BalanceIcon>{currentBalance.balance}</BalanceTotal>
			</BalanceContent>
		</BalanceWrap>
	);
};

