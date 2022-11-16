import React from 'react';
import { TableStyle, THead, TBody, Tr, Th, Td, NoTransactions, IconQuare } from './Table.styled';

export const Table = ({ statisticsData }) => {
  const { showTransactionsStatistics, expenseSummary, incomeSummary } = statisticsData;

  // console.log(showTransactionsStatistics, expenseSummary, incomeSummary);
  console.log(showTransactionsStatistics);
  return (
    <>
      {showTransactionsStatistics.length > 0 ? (
        <TableStyle>
          <THead>
            <Tr key="head">
              <Th>Category</Th>
              <Th right>Sum</Th>
            </Tr>
          </THead>
          <TBody>
            {showTransactionsStatistics.map(
              ({
                color,
                name,
                type,
                total
              }, idx) => (
                <Tr key={idx + name}>
                  <Td left>
                    <IconQuare color={color}></IconQuare>{name}</Td>
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
        </TableStyle>
      ) : (
        <NoTransactions>
          No data
        </NoTransactions>
      )}
    </>
  )
}