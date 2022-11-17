import React from 'react';
import { useSelector} from 'react-redux';
import { selectTransactionsSummary } from 'redux/selectors';
import { TableStyle, THead, TBody, Tr, Th, Td, NoTransactions, IconQuare } from './Table.styled';
import { setColors } from "helpers/setColors";

export const Table = () => {

  const statisticsData = useSelector(selectTransactionsSummary);
  const { categoriesSummary, expenseSummary, incomeSummary } = statisticsData;
  console.log(categoriesSummary);
  const showCategoriesSummary = setColors(categoriesSummary.filter(e => e.type === "EXPENSE"));

  return (
    <>
      {showCategoriesSummary.length > 0 ? (
        <TableStyle>
          <THead>
            <Tr key="head">
              <Th>Category</Th>
              <Th right>Sum</Th>
            </Tr>
          </THead>
          <TBody>
            {showCategoriesSummary.map(
              ({
                color,
                name,
                type,
                total
              }, idx) => (
                <Tr key={idx + name}>
                  <Td left>
                    <IconQuare color={color}>{name}</IconQuare></Td>
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
          No data was found for your search, please choose another search period.
        </NoTransactions>
      )}
    </>
  )
}