import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { selectTransactions, selectTransactionsSummary } from 'redux/selectors';
// import { getAllTransactions, getTransactionCategories, getTransactionsSummary } from 'redux/transactions/operations';
import { getTransactionsSummary } from 'redux/transactions/operations';
import { Box, BoxChart, BoxTitle, Title, BoxSelect, Inner, Balance } from './DiagramTab.styled';
import { Chart } from "components/Chart/Chart";
import { Table } from "components/Table/Table";
import { SelectForm } from 'components/SelectForm/SelectForm';
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "components/Loader/Loader";

export const DiagramTab = () => {

	const dispatch = useDispatch();
	const transactions = useSelector(selectTransactions);
	const transactionsSummary = useSelector(selectTransactionsSummary);

	const totalBalance = transactions.totalBalance.toFixed(2);
 	
  console.log(transactions);
	// const [numberMonth, setNumberMonth] = useState(11);
	// const [numberYear, setNumberYear] = useState(2022);
	const [statisticsData, setStatisticsData] = useState({ ...transactionsSummary });
	const isLoading = useSelector(selectTransactions).isLoading;

	const selectedHandler = ({ selectedMonth, selectedYear }) => {

		const month = parseInt(selectedMonth);
		const year = parseInt(selectedYear);
		console.log(selectedMonth);
		console.log(selectedYear);
		console.log(month);
		console.log(year);

		dispatch(getTransactionsSummary({ month, year}));
		setStatisticsData({ ...transactionsSummary });
	}

	return (
		<>
			{isLoading && <Loader />}
			<Box>
				{!isLoading &&
					(<><BoxTitle>
						<Title>Statistics</Title>
						<BoxChart>
							<Chart statisticsData={statisticsData} />
							{statisticsData.categoriesSummary.length > 0 &&
								<Balance>{`₴ ${totalBalance}`}</Balance>}
						</BoxChart>
					</BoxTitle>
						<Inner>
							<BoxSelect>
								<SelectForm onSelected={selectedHandler} />
							</BoxSelect>
							<Table statisticsData={statisticsData} />
						</Inner>
					</>)}
			</Box>
		</>
	);
};
