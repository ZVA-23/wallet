import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { numberWithSpaces } from "helpers/numberWithSpaces";

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
				<BalanceTitle>
					Your balance
				</BalanceTitle>
				<BalanceTotal>
					<BalanceIcon>
						&#8372;
					</BalanceIcon>
					{` ${numberWithSpaces(currentBalance.balance.toFixed(2))}`}
				</BalanceTotal>
			</BalanceContent>
		</BalanceWrap>
	);
};

