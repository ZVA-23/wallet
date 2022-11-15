// import React, { useEffect } from 'react';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import { selectTransactionsSummary } from 'redux/selectors';
// import { selectTransactions, selectTransactionsSummary } from 'redux/selectors';
// import { getAllTransactions, getTransactionCategories, getTransactionsSummary } from 'redux/transactions/operations';
import { Box, BoxChart, Title, Table, THead, TBody, Tr, Th, Td, NoTransactions } from './DiagramTab.styled';
// import { Table } from "components/Table/Table";
import { Chart } from "components/Chart/Chart";
// import { Container } from 'components/Container/Container';

// import 'react-toastify/dist/ReactToastify.css';


export const DiagramTab = () => {
	// const dispatch = useDispatch();

	// const transactions = useSelector(selectTransasctions);
	// const transactionsData = transactions.items;
	// const transactionsCategories = transactions.categories;
	const transactionsSummary = useSelector(selectTransactionsSummary);
	const { categoriesSummary, expenseSummary, incomeSummary} = transactionsSummary;
	// const { categoriesSummary, expenseSummary, incomeSummary, periodTotal } = transactionsSummary;

	// const transactionsCategories2 = dispatch(getTransactionCategories());
	// console.log(transactions);
	// console.log(transactionsSummary);
	// console.log(categoriesSummary);

	// useEffect(() => {
	// dispatch(getAllTransactions());
	// }, [dispatch]);

	const showTransactionsStatistics = categoriesSummary.filter(e =>
		e.type === "EXPENSE");

	console.log(showTransactionsStatistics);

	// const getCategoriesNamme = categoryId => {
	// 	const index = transactionsCategories.findIndex(
	// 		categorie => categorie.id === categoryId
	// 	);
	// 	return transactionsCategories[index].name;
	// };

	// const handleClick = () => {
		// const otzet = dispatch(getTransactionsSummary({ month: 11, year: 2022 }));
		// const otzet =	dispatch(getTransactionsSummary({ month: 11 }));

		console.log(categoriesSummary);
		console.log(transactionsSummary);
		// console.log(otzet);
	// }

	return (
		<>
			<Box>
				<div>
					<Title>Statistics</Title>
					<BoxChart>
						<Chart statisticsData={showTransactionsStatistics} />
					</BoxChart>
				</div>
				{/* <button type="button" onClick={handleClick}> OK!!!!!</button> */}
				<Table>
					<THead>
						<Tr>
							<Th>Category</Th>
							<Th right>Sum</Th>
						</Tr>
					</THead>
					{showTransactionsStatistics.length > 0 ? (
						<>
							<TBody>
								{showTransactionsStatistics.map(
									({
										name,
										type,
										total
									}, idx) => (
										<Tr key={idx + name}>
											<Td left>{name}</Td>
											<Td right>{total > 0
												? total.toFixed(2)
												: (-total).toFixed(2)}</Td>
										</Tr>
									))}
								<Tr total key={expenseSummary}>
									<Td left>Expenses:</Td>
									<Td right expense>{expenseSummary > 0
										? expenseSummary.toFixed(2)
										: (-expenseSummary).toFixed(2)}</Td>
								</Tr>
								<Tr total key={incomeSummary}>
									<Td left>Income:</Td>
									<Td right income>{incomeSummary > 0
										? incomeSummary.toFixed(2)
										: (-incomeSummary).toFixed(2)}</Td>
								</Tr>
							</TBody>
						</>
					) : (
						<Tr>
							<Td colspan="2">
								<NoTransactions>
									No data
								</NoTransactions>
							</Td>
						</Tr>
					)}
				</Table>
			</Box>
		</>
	);
};
