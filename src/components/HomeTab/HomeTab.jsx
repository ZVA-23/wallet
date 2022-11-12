import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "redux/selectors";
import { getAllTransactions } from "redux/transactions/operations";
import { Box, Table, THead, TBody, Tr, Th, Td } from "./HomeTab.styled";

export const HomeTab = () => {

  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const transactionsItems = transactions.items;
  const transactionsCategories = transactions.categories;

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const showTransactions = [...transactionsItems].sort((a, b) =>
    b.transactionDate.localeCompare(a.transactionDate));

  const getCategoriesNamme = categoryId => {
    const index = transactionsCategories.findIndex(categorie => categorie.id === categoryId);
    return transactionsCategories[index].name;
  }

  // const handleThreeDots = (e) => {
  //   e.style.overflow = (window.getComputedStyle(this).overflow === 'hidden') ? 'visible' : 'hidden';
  // }

  return (
    <>

      <Box>
        <Table>
          <THead>
            <Tr>
              <Th>Date</Th>
              <Th center>Type</Th>
              <Th>Category</Th>
              <Th>Comment</Th>
              <Th right>Sum</Th>
              <Th right>Balance</Th>
            </Tr>
          </THead>
          {showTransactions.length > 0 &&
            <TBody>
              {showTransactions.map(({ id, transactionDate, type, categoryId, comment, amount, balanceAfter }) => (
                <Tr key={id}>
                  <Td>{transactionDate.split('-').join('.').slice(2)}</Td>
                  <Td center>{type === "INCOME" ? "+" : "-"}</Td>
                  <Td>{getCategoriesNamme(categoryId)}</Td>
                  <Td>{comment.length > 23 ?
                    `${comment.substring(0, 23)}...` :
                    comment}
                  </Td>
                  <Td right sum type={type}>{amount > 0 ?
                    amount.toFixed(2) :
                    (-amount).toFixed(2)}
                  </Td>
                  <Td right>{balanceAfter.toFixed(2)}</Td>
                </Tr>
              ))}
            </TBody>}
        </Table>
      </Box>
    </>
  )
};
