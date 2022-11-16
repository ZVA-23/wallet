import React, { useEffect } from 'react';
import { useMedia } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactions } from 'redux/selectors';
import { getAllTransactions } from 'redux/transactions/operations';
import { Box, Table, THead, TBody, Tr, Th, Td, NoTransactions } from './HomeTab.styled';

export const HomeTab = () => {
	const dispatch = useDispatch();

	const transactions = useSelector(selectTransactions);
	const transactionsData = transactions.items;
	const transactionsCategories = transactions.categories;
	const isMobile = useMedia('(max-width: 768px)');

	useEffect(() => {
		dispatch(getAllTransactions());
	}, [dispatch]);

	const showTransactions = [...transactionsData].sort((a, b) =>
		b.transactionDate.localeCompare(a.transactionDate)
	);

	const getCategoriesNamme = categoryId => {
		const index = transactionsCategories.findIndex(
			categorie => categorie.id === categoryId
		);
		if (index === -1) return '';
		return transactionsCategories[index].name;
	};

	// const handleThreeDots = (e) => {
	//   e.style.overflow = (window.getComputedStyle(this).overflow === 'hidden') ? 'visible' : 'hidden';
	// }

	return (
		<>
			{isMobile ? (
				<>
					<Box>
						{showTransactions.length > 0 ?
							<>
								{showTransactions.map(
									({
										id,
										transactionDate,
										type,
										categoryId,
										comment,
										amount,
										balanceAfter,
									}) => (
										<Table type={type}>
											<Tr key={`${id}Data`}>
												<Th left>Date</Th>
												<Td right>
													{transactionDate.split('-').join('.').slice(2)}
												</Td>
											</Tr>
											<Tr key={`${id}Type`}>
												<Th left>Type</Th>
												<Td right>{type === 'INCOME' ? '+' : '-'}</Td>
											</Tr>
											<Tr key={`${id}Category`}>
												<Th left>Category</Th>
												<Td right>{getCategoriesNamme(categoryId)}</Td>
											</Tr>
											<Tr key={`${id}Comment`}>
												<Th left>Comment</Th>
												<Td right>
													{comment.length > 23
														? `${comment.substring(0, 23)}...`
														: comment}
												</Td>
											</Tr>
											<Tr key={`${id}Sum`}>
												<Th left>Sum</Th>
												<Td right sum typeTransaction={type}>
													{amount > 0
														? amount.toFixed(2)
														: (-amount).toFixed(2)}
												</Td>
											</Tr>
											<Tr key={`${id}Balance`}>
												<Th left>Balance</Th>
												<Td right>{balanceAfter.toFixed(2)}</Td>
											</Tr>
										</Table>
									)
								)}
							</> : (
								<NoTransactions>No transactions</NoTransactions>
							)}
					</Box>
				</>
			) : (
				<Box>
					<Table>
						<THead>
							<Tr key="headtable">
								<Th>Date</Th>
								<Th center>Type</Th>
								<Th>Category</Th>
								<Th>Comment</Th>
								<Th right>Sum</Th>
								<Th right>Balance</Th>
							</Tr>
						</THead>
						{showTransactions.length > 0 ? (
							<>
								<TBody>
									{showTransactions.map(
										({
											id,
											transactionDate,
											type,
											categoryId,
											comment,
											amount,
											balanceAfter,
										}) => (
											<Tr key={id}>
												<Td>{transactionDate.split('-').join('.').slice(2)}</Td>
												<Td center>{type === 'INCOME' ? '+' : '-'}</Td>
												<Td>{getCategoriesNamme(categoryId)}</Td>
												<Td>
													{comment.length > 23
														? `${comment.substring(0, 23)}...`
														: comment}
												</Td>
												<Td right sum typeTransaction={type}>
													{amount > 0 ? amount.toFixed(2) : (-amount).toFixed(2)}
												</Td>
												<Td right>{balanceAfter.toFixed(2)}</Td>
											</Tr>
										))}
								</TBody>
							</>
						) : (
							<Tr>
								<Td colspan="5">
									<NoTransactions>
										No transactions
									</NoTransactions>
								</Td>
							</Tr>
						)}
					</Table>
				</Box>
			)}
		</>
	);
};
