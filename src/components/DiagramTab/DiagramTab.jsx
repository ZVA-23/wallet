import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { selectTransactions, selectTransactionsSummary } from 'redux/selectors';
// import { getAllTransactions, getTransactionCategories, getTransactionsSummary } from 'redux/transactions/operations';
import { getAllTransactions, getTransactionsSummary } from 'redux/transactions/operations';
import { Box, BoxChart, BoxTitle, Title, BoxSelect, Inner, Balance } from './DiagramTab.styled';
import { Chart } from "components/Chart/Chart";
import { Table } from "components/Table/Table";
import { SelectForm } from 'components/SelectForm/SelectForm';
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

export const DiagramTab = () => {

	const dispatch = useDispatch();
	const transactions = useSelector(selectTransactions);
	const transactionsSummary = useSelector(selectTransactionsSummary);

	const totalBalance = transactions.totalBalance.toFixed(2);

	// const [numberMonth, setNumberMonth] = useState(11);
	// const [numberYear, setNumberYear] = useState(2022);
	const [statisticsData, setStatisticsData] = useState({ ...transactionsSummary });

	// useEffect(() => {
	// 	// dispatch(getAllTransactions());
	// 	console.log(transactionsSummary);
	// 	console.log(statisticsData);
	// }, [dispatch]);

	const submitHandler = ({ selectedMonth, selectedYear }) => {
		// setNumberMonth(parseInt(selectedMonth));
		// setNumberYear(parseInt(selectedYear));

		const month = parseInt(selectedMonth);
		const year = parseInt(selectedYear);

		dispatch(getTransactionsSummary({ month, year }));
		dispatch(getAllTransactions());
		setStatisticsData({ ...transactionsSummary });
	}

	return (
		<>
			<Box>
				<BoxTitle>
					<Title>Statistics</Title>
					<BoxChart>
						<Chart statisticsData={statisticsData} />
						{statisticsData.categoriesSummary.length > 0 &&
							<Balance>{`₴ ${totalBalance}`}</Balance>}
					</BoxChart>
				</BoxTitle>
				<Inner>
					<BoxSelect>
						<SelectForm onSubmit={submitHandler} />
					</BoxSelect>
					<Table statisticsData={statisticsData} />
				</Inner>
			</Box>
		</>
	);
};
