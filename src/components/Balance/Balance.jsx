import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';
import { numberWithSpaces } from "helpers/numberWithSpaces";

import {
	BalanceWrap,
	BalanceContent,
	BalanceTitle,
	BalanceTotal,
	BalanceIcon
} from './Balance.styled';

export const Balance = () => {
	const transactions = useSelector(selectTransactions);

	return (
		<BalanceWrap>
			<BalanceContent>
				<BalanceTitle>
					Your balance
				</BalanceTitle>
				<BalanceTotal>
					<BalanceIcon>
						&#8372;
					</BalanceIcon>
					{` ${numberWithSpaces(transactions.totalBalance.toFixed(2))}`}
				</BalanceTotal>
			</BalanceContent>
		</BalanceWrap>
	);
};
