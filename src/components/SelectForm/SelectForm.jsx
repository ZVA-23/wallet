import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { getTransactionsSummary } from 'redux/transactions/operations';
import { ReactComponent as Arrow } from '../../icons/add-transactions/arrow-selector.svg';
import {
  Form,
  SelectorWrapper,
  Selector,
  SelectList,
  SelectListItem,
} from './SelectForm.styled';

export const SelectForm = () => {
  const dispatch = useDispatch();
  
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const [selectorMonth, setSelectorMonth] = useState(false);
  const [selectorYear, setSelectorYear] = useState(false);

  const [selectedMonthOption, setSelectedMonthOption] = useState('Month');
  const [selectedYearOption, setSelectedYearOption] = useState('Year');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = [2022, 2021, 2020];

  useEffect(() => {
    if (month && year) {
      dispatch(getTransactionsSummary({ month, year }));
    }
  }, [dispatch, month, year]);

  const selectListHandlerMonth = () => {
    setSelectorMonth(!selectorMonth);
  };
  const selectListHandlerYear = () => {
    setSelectorYear(!selectorYear);
  };

  const selectedOptionHandlerMonth = ({ target }) => {
    if (target.nodeName === 'LI') {
      setSelectedMonthOption(target.textContent);
      setSelectorMonth(false);
      const index = months.findIndex(m => m === target.textContent);
      setMonth(index + 1);
    }
  };

  const selectedOptionHandlerYear = ({ target }) => {
    if (target.nodeName === 'LI') {
      setSelectedYearOption(target.textContent);
      setSelectorYear(false);
      setYear(+target.textContent);
    }
  };

  return (
    <Form>
      <SelectorWrapper>
        <Selector onClick={selectListHandlerMonth}>
          {selectedMonthOption}
          <Arrow />
        </Selector>
        {selectorMonth && (
          <SelectList onClick={selectedOptionHandlerMonth}>
            {months.map((month, idx) => (
              <SelectListItem key={idx + 'month'} id={idx + 1}>
                {month}
              </SelectListItem>
            ))}
          </SelectList>
        )}
      </SelectorWrapper>

      <SelectorWrapper>
        <Selector onClick={selectListHandlerYear}>
          {selectedYearOption}
          <Arrow />
        </Selector>
        {selectorYear && (
          <SelectList onClick={selectedOptionHandlerYear}>
            {years.map((year, idx) => (
              <SelectListItem key={idx + 'year'} id={year}>
                {year}
              </SelectListItem>
            ))}
          </SelectList>
        )}
      </SelectorWrapper>
    </Form>
  );
};
