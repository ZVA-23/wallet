import { useSelector } from 'react-redux';
import { selectTransactionsSummary } from 'redux/selectors';
import {
  BalanceWrap,
  BalanceContent,
  BalanceTitle,
  BalanceTotal,
} from './Balance.styled';

export const Balance = () => {
  const summaryBal = useSelector(selectTransactionsSummary);
  const totalBalance = Number(summaryBal).toFixed(2);

  console.log(totalBalance);
  return (
    <BalanceWrap>
      <BalanceContent>
        <BalanceTitle>Your balance</BalanceTitle>
        <BalanceTotal>₴ {totalBalance}</BalanceTotal>
      </BalanceContent>
    </BalanceWrap>
  );
};
