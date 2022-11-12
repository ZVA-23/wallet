import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransaction } from "redux/transactions/operations";
import { ReactComponent as Arrow } from "../../icons/add-transactions/arrow-selector.svg";
import { AddTransactionsWrapper, Title, CheckWrapper, Expense, Income, Checkbox, CastomCheckbox, CastomCheckboxWrapp, Form, InputField, Comment, SubmitBtn, CancelBtn, SelectorWrapper, Selector, SelectList, SelectListItem, DateInput, InputWrapper } from "./ModalAddTransaction.styled"

import { validate } from 'indicative/validator'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ModalAddTransactions = () => {
	const dispatch = useDispatch();

	const [checked, setChecked] = useState(false);
	const [option, setOption] = useState(true);
	const [transactionDate, setTransactionDate] = useState(new Date().toISOString().split('T')[0]);
	const [type, setType] = useState("INCOME");
	const [amount, setAmount] = useState("");
	const [comment, setComment] = useState("");
	const [categoryId, setCategoryId] = useState("063f1132-ba5d-42b4-951d-44011ca46262");
	const [selector, setSelector] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Select a category");


	const handleCheckbox = () => {
		setChecked(!checked)
		setOption(!option)

		if (checked) {
			setType("EXPENSE")
		} else {
			setType("INCOME")
		}
	}

	const formFieldHandler = e => {
		switch (e.target.name) {
			case "amount":
				setAmount(e.target.value)
				break;
			case "comment":
				setComment(e.target.value)
				break;

			default: return;
		}
	}

	const selectListHandler = () => {
		setSelector(!selector);
	}

	const validator = {
		transactionDate: 'required|string',
		type: 'string',
		categoryId: 'required|string',
		comment: 'string',
		amount: 'required|integer|above:0',
	}

	const submitHandler = e => {
		e.preventDefault();

		const data = { transactionDate, type, categoryId, comment, amount }

		validate(data, validator)
			.then(data => {
				dispatch(createTransaction(data));
			})
			.catch(error => {
				console.log("error");
				toast.error('Error during service worker registration: ');
			})
	}

	const selectedOptionHandler = e => {
		if (e.target.nodeName === "LI") {
			setSelectedOption(e.target.textContent);
			setSelector(false);
		}
	}

	const changeDate = e => {
		setTransactionDate(e ? e.format("YYYY-MM-DD") : (new Date().toISOString().split('T')[0]))
	}

	return <AddTransactionsWrapper>
		<Title>Add transaction</Title>
		<Form onSubmit={submitHandler}>
			<CheckWrapper>
				<Income checkedBox={checked} activeOption={option}>Income</Income>
				<CastomCheckboxWrapp>
					<CastomCheckbox checkedBox={checked}>
						<Checkbox type="checkbox" id="checkbox" onChange={handleCheckbox} />
					</CastomCheckbox>
				</CastomCheckboxWrapp>
				<Expense checkedBox={checked} activeOption={option}>Expense</Expense>
			</CheckWrapper>
			{!checked && <SelectorWrapper>
				<Selector onClick={selectListHandler}>{selectedOption} <Arrow /></Selector>
				{selector && <SelectList onClick={selectedOptionHandler}>
					<SelectListItem>Car</SelectListItem>
					<SelectListItem>Food</SelectListItem>
					<SelectListItem>Alcohol</SelectListItem>
				</SelectList>}
			</SelectorWrapper>}
			<InputWrapper>
				<InputField value={amount} name="amount" type="text" placeholder="0.00" required onChange={formFieldHandler} />
				<DateInput onChange={changeDate} value={transactionDate} timeFormat={false} closeOnSelect={true} dateFormat="YYYY-MM-DD" />
			</InputWrapper>
			<Comment value={comment} name="comment" placeholder="Comment" onChange={formFieldHandler}></Comment>
			<SubmitBtn type="submit">Add</SubmitBtn>
		</Form>
		<CancelBtn type="button">Cancel</CancelBtn>
	</AddTransactionsWrapper >
}
