import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { numberWithSpaces } from "helpers/numberWithSpaces";

import {
	BalanceWrap,
	BalanceContent,
	BalanceTitle,
	BalanceTotal,
} from './Balance.styled';
import { useEffect, useState } from 'react';

export const Balance = () => {
	const currentBalance = useSelector(selectAuth);
	const [balance, setBalance] = useState(numberWithSpaces(currentBalance.balance.toFixed(2)));

	useEffect(() => {
		setBalance(numberWithSpaces(currentBalance.balance.toFixed(2)))
	}, [currentBalance.balance])

	return (
		<BalanceWrap>
			<BalanceContent>
				<BalanceTitle>
					Your balance
				</BalanceTitle>
				<BalanceTotal>
					{`₴ ${balance}`}
				</BalanceTotal>
			</BalanceContent>
		</BalanceWrap>
	);
};

