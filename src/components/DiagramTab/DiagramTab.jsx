import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectTransactionsSummary } from 'redux/selectors';
import { selectTransactions, selectTransactionsSummary } from 'redux/selectors';
import { getAllTransactions, getTransactionCategories, getTransactionsSummary } from 'redux/transactions/operations';
import { Box, BoxChart, BoxTitle, Title, BoxSelect, Inner } from './DiagramTab.styled';
import { Chart } from "components/Chart/Chart";
import { Table } from "components/Table/Table";
import { SelectForm } from 'components/SelectForm/SelectForm';
// import { Container } from 'components/Container/Container';
import { setColors } from "helpers/setColors";

export const DiagramTab = () => {

	const dispatch = useDispatch();
	// const transactions = useSelector(selectTransasctions);
	// const transactionsData = transactions.items;
	// const transactionsCategories = transactions.categories;
	const transactionsSummary = useSelector(selectTransactionsSummary);
	const { categoriesSummary, expenseSummary, incomeSummary } = transactionsSummary;
	// const { categoriesSummary, expenseSummary, incomeSummary, periodTotal } = transactionsSummary;
	//=============================

	const [showTransactionsStatistics, setShowTransactionsStatistics] = useState(categoriesSummary.filter(e =>
		e.type === "EXPENSE"));

	const [statisticsTableData, setStatisticsTableData] = useState({ showTransactionsStatistics, expenseSummary, incomeSummary });

	useEffect(() => {
		// dispatch(getAllTransactions());

		setShowTransactionsStatistics(setColors(categoriesSummary.filter(e => e.type === "EXPENSE")));

		setStatisticsTableData({ showTransactionsStatistics, expenseSummary, incomeSummary });
	}, [dispatch]);


	console.log(showTransactionsStatistics);

	const submitHandler = (numberMonth, numberYear) => {
		console.log(numberMonth);
		console.log(numberYear);
		const otzet = dispatch(getTransactionsSummary({ month: numberMonth, year: numberYear }));
		console.log(otzet);
		setStatisticsTableData({ showTransactionsStatistics, expenseSummary, incomeSummary });
	}

	return (
		<>
			<Box>
				<BoxTitle>
					<Title>Statistics</Title>
					<BoxChart>
						<Chart statisticsData={showTransactionsStatistics} />
					</BoxChart>
				</BoxTitle>
				<Inner>
					<BoxSelect>
						<SelectForm onSubmit={submitHandler} />
					</BoxSelect>
					<Table statisticsData={statisticsTableData} />
				</Inner>
			</Box>
		</>
	);
};
