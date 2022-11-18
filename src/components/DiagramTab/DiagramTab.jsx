import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactions, selectAuth, selectTransactionsSummary } from 'redux/selectors';
import { getTransactionsSummary } from 'redux/transactions/operations';
import { Box, BoxChart, BoxTitle, Title, BoxSelect, Inner, Balance } from './DiagramTab.styled';
import { Chart } from "components/Chart/Chart";
import { Table } from "components/Table/Table";
import { SelectForm } from 'components/SelectForm/SelectForm';
import { Loader } from "components/Loader/Loader";



export const DiagramTab = () => {

	const dispatch = useDispatch();
	// const transactions = useSelector(selectTransactions);
	const transactionsSummary = useSelector(selectTransactionsSummary);
	const currentBalance = useSelector(selectAuth);
	const totalBalance = currentBalance.balance.toFixed(2);

	const [numberMonth, setNumberMonth] = useState(new Date().getMonth() + 1);
	const [numberYear, setNumberYear] = useState(new Date().getFullYear());
	const isLoading = useSelector(selectTransactions).isLoading;

	useEffect(() => {
		if (numberMonth && numberYear) {
			dispatch(getTransactionsSummary({ month: numberMonth, year: numberYear }));
		}
	}, [numberMonth, numberYear, dispatch]);

	return (
		<>
			{isLoading && <Loader />}
			<Box>
				{!isLoading &&
					(<><BoxTitle>
						<Title>Statistics</Title>
						<BoxChart>
							<Chart />
							{transactionsSummary.categoriesSummary.length > 0 &&
								<Balance>{`₴ ${totalBalance}`}</Balance>}
						</BoxChart>
					</BoxTitle>
						<Inner>
							<BoxSelect>
								<SelectForm
									numberMonth={numberMonth}
									numberYear={numberYear}
									setNumberMonth={setNumberMonth}
									setNumberYear={setNumberYear}
								/>
							</BoxSelect>
							<Table />
						</Inner>
					</>)}
			</Box>
		</>
	);
};
