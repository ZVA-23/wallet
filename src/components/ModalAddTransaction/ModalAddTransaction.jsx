import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTransaction } from 'redux/transactions/operations';
import { ReactComponent as Arrow } from '../../icons/add-transactions/arrow-selector.svg';
import {
  AddTransactionsWrapper,
  Title,
  CheckWrapper,
  Expense,
  Income,
  Checkbox,
  CastomCheckbox,
  CastomCheckboxWrapp,
  Form,
  InputField,
  Comment,
  SubmitBtn,
  CancelBtn,
  SelectorWrapper,
  Selector,
  SelectList,
  SelectListItem,
  DateInput,
  InputWrapper,
} from './ModalAddTransaction.styled';

export const ModalAddTransactions = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);
  const [option, setOption] = useState(true);

  const [transactionDate, setTransactionDate] = useState(
    new Date().toLocaleDateString().replaceAll('/', '.')
  );
  const [type, setType] = useState('INCOME');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [selector, setSelector] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select a category');

  const handleCheckbox = () => {
    setChecked(!checked);
    setOption(!option);

    if (checked) {
      setType('INCOME');
    } else {
      setType('EXPENSE');
    }
  };

  const formFieldHandler = e => {
    switch (e.target.name) {
      case 'amount':
        setAmount(e.target.value);
        break;
      case 'comment':
        setComment(e.target.value);
        break;

      default:
        return;
    }
  };

  const selectListHandler = () => {
    setSelector(!selector);
  };

  const submitHandler = e => {
    e.preventDefault();

    dispatch(createTransaction({ transactionDate, type, comment, amount }));
  };

  const selectedOptionHandler = e => {
    if (e.target.nodeName === 'LI') {
      setSelectedOption(e.target.textContent);
      setSelector(false);
    }
  };

  const changeDate = e => {
    setTransactionDate(e.format('DD.MM.YYYY'));
  };

  return (
    <AddTransactionsWrapper>
      <Title>Add transaction</Title>
      <Form onSubmit={submitHandler}>
        <CheckWrapper>
          <Income checkedBox={checked} activeOption={option}>
            Income
          </Income>
          <CastomCheckboxWrapp>
            <CastomCheckbox checkedBox={checked}>
              <Checkbox
                type="checkbox"
                id="checkbox"
                onChange={handleCheckbox}
              />
            </CastomCheckbox>
          </CastomCheckboxWrapp>
          <Expense checkedBox={checked} activeOption={option}>
            Expense
          </Expense>
        </CheckWrapper>
        {!checked && (
          <SelectorWrapper>
            <Selector onClick={selectListHandler}>
              {selectedOption} <Arrow />
            </Selector>
            {selector && (
              <SelectList onClick={selectedOptionHandler}>
                <SelectListItem>Car</SelectListItem>
                <SelectListItem>Food</SelectListItem>
                <SelectListItem>Alcohol</SelectListItem>
              </SelectList>
            )}
          </SelectorWrapper>
        )}
        <InputWrapper>
          <InputField
            value={amount}
            name="amount"
            type="text"
            placeholder="0.00"
            required
            onChange={formFieldHandler}
          />
          <DateInput
            onChange={changeDate}
            value={transactionDate}
            timeFormat={false}
            closeOnSelect={true}
            dateFormat="DD.MM.YY"
          />
        </InputWrapper>
        <Comment
          value={comment}
          name="comment"
          placeholder="Comment"
          onChange={formFieldHandler}
        ></Comment>
        <SubmitBtn type="submit">Add</SubmitBtn>
      </Form>
      <CancelBtn type="button">Cancel</CancelBtn>
    </AddTransactionsWrapper>
  );
};
