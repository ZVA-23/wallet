import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';
import {
  Box,
  BoxChart,
  BoxTitle,
  Title,
  BoxSelect,
  Inner,
  Balance,
} from './DiagramTab.styled';
import { Chart } from 'components/Chart/Chart';
import { Table } from 'components/Table/Table';
import { SelectForm } from 'components/SelectForm/SelectForm';

import { Loader } from 'components/Loader/Loader';

export const DiagramTab = () => {
  const transactions = useSelector(selectTransactions);

  const totalBalance = transactions.totalBalance.toFixed(2);

  const isLoading = useSelector(selectTransactions).isLoading;
  const { summary } = useSelector(selectTransactions);

  if (isLoading) return <Loader />;

  return (
    <>
      <Box>
        {summary && (
          <>
            <BoxTitle>
              <Title>Statistics</Title>
              <BoxChart>
                <Chart statisticsData={summary} />
                {summary.categoriesSummary.length > 0 && (
                  <Balance>{`₴ ${totalBalance}`}</Balance>
                )}
              </BoxChart>
            </BoxTitle>
            <Inner>
              <BoxSelect>
                <SelectForm />
              </BoxSelect>
              <Table statisticsData={summary} />
            </Inner>
          </>
        )}
      </Box>
    </>
  );
};
