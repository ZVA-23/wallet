import React, { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Arrow } from "../../icons/add-transactions/arrow-selector.svg";
import { Form, SelectorWrapper, Selector, SelectList, SelectListItem } from "./SelectForm.styled";

export const SelectForm = ({ onSelected }) => {

  const [selectorMonth, setSelectorMonth] = useState(false);
  const [selectorYear, setSelectorYear] = useState(false);

  const [numberMonth, setNumberMonth] = useState();
  const [numberYear, setNumberYear] = useState();

  const [selectedMonthOption, setSelectedMonthOption] = useState("Month");
  const [selectedYearOption, setSelectedYearOption] = useState("Year");

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
    'December'
  ];

  const years = [2022, 2021, 2020];

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
      setNumberMonth(target.id);
      selectedHandlerForm(target.id);
    }
  };

  const selectedOptionHandlerYear = ({ target }) => {
    if (target.nodeName === 'LI') {

      setSelectedYearOption(target.textContent);
      setSelectorYear(false);
      setNumberYear(target.id);
      selectedHandlerForm(target.id);
    }
  };

  const selectedHandlerForm = t => {
    console.log(t);
    console.log(numberMonth);
    console.log(numberYear);

    if (numberMonth && numberYear) {
      console.log("IF", numberMonth);
      console.log("IF", numberYear);
      return onSelected({ selectedMonth: numberMonth, selectedYear: numberYear });
    }
    numberMonth ? toast.info("Select a year!") : toast.info("Select a month!");
  }

  return (

    <Form>

      <SelectorWrapper>
        <Selector
          onClick={selectListHandlerMonth}>
          {selectedMonthOption}
          <Arrow />
        </Selector>
        {selectorMonth &&
          <SelectList onClick={selectedOptionHandlerMonth}>
            {months.map((month, idx) =>
              <SelectListItem
                key={idx + "month"}
                id={idx + 1}>
                {month}
              </SelectListItem>)}
          </SelectList>}
      </SelectorWrapper>

      <SelectorWrapper>
        <Selector
          onClick={selectListHandlerYear}>
          {selectedYearOption}
          <Arrow />
        </Selector>
        {selectorYear &&
          <SelectList onClick={selectedOptionHandlerYear}>
            {years.map((year, idx) =>
              <SelectListItem
                key={idx + "year"}
                id={year}>
                {year}
              </SelectListItem>)}
          </SelectList>}
      </SelectorWrapper>

    </Form>
  )
}