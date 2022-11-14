import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';

import {
	BalanceWrap,
	BalanceContent,
	BalanceTitle,
	BalanceTotal,
} from './Balance.styled';

export const Balance = () => {
	const transactions = useSelector(selectTransactions);

	return (
		<BalanceWrap>
			<BalanceContent>
				<BalanceTitle>Your balance</BalanceTitle>
				<BalanceTotal>$ {transactions.totalBalance.toFixed(2)}</BalanceTotal>
			</BalanceContent>
		</BalanceWrap>
	);
};
