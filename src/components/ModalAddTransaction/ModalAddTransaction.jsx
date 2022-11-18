import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from 'indicative/validator';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { selectTransactions } from "redux/selectors";
import { createTransaction } from "redux/transactions/operations";
import { ReactComponent as Arrow } from "../../icons/add-transactions/arrow-selector.svg";
import { AddTransactionsWrapper, Title, CheckWrapper, Expense, Income, Checkbox, CastomCheckbox, CastomCheckboxWrapp, Form, InputField, Comment, SubmitBtn, CancelBtn, SelectorWrapper, Selector, SelectList, SelectListItem, DateInput, InputWrapper } from "./ModalAddTransaction.styled"

import { refreshUser } from "redux/auth/operations";

export const ModalAddTransactions = ({ showModalHandler }) => {

	const dispatch = useDispatch();
	const transactions = useSelector(selectTransactions);
	const categories = [...transactions.categories];
	categories.pop();
	const today = new Date().toISOString().split('T')[0].split("-").reverse().join(".");

	const [checked, setChecked] = useState(false);
	const [option, setOption] = useState(true);
	const [transactionDate, setTransactionDate] = useState(new Date().toISOString().split('T')[0]);
	const [type, setType] = useState("EXPENSE");
	const [amount, setAmount] = useState("");
	const [comment, setComment] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [selector, setSelector] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Select a category");
	const [visibleDate, setVisibleDate] = useState(today);

	const handleCheckbox = () => {
		setChecked(!checked)
		setOption(!option)

		if (checked) {
			setType("EXPENSE")
		} else {
			setType("INCOME")
			setCategoryId("063f1132-ba5d-42b4-951d-44011ca46262")
		}
	}

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

	const selectedOptionHandler = e => {
		if (e.target.nodeName === 'LI') {
			setSelectedOption(e.target.textContent);
			setSelector(false);
			setCategoryId(e.target.id);
		}
	};

	const changeDate = e => {
		setTransactionDate(e ? e.format("YYYY-MM-DD") : (new Date().toISOString().split('T')[0]));
		setVisibleDate(e.format("DD.MM.YYYY"))
	}

	const validator = {
		transactionDate: 'required|string',
		type: 'string',
		categoryId: 'required|string',
		comment: 'string',
		amount: 'required|integer',
	}

	const submitHandler = e => {
		e.preventDefault();

		const data = { transactionDate, type, categoryId, comment, amount };

		if (type === "EXPENSE") {
			data.amount = "-" + amount;
		}

		if (type === "EXPENSE" && Number(amount) > transactions.totalBalance) {
			toast.error("You don't have enought money");
			return;
		}

		validate(data, validator)
			.then(() => {
				dispatch(createTransaction(data));
				dispatch(refreshUser())

				showModalHandler();
				toast.success("Transation is added!")
				setTransactionDate(new Date().toISOString().split('T')[0]);
				setAmount("");
				setComment("");
				setCategoryId("");
				setSelectedOption("Select a category");
			})
			.catch(() => {
				toast.error("Something went wrong, check your fields and try again");
			})
	}

	const onButtonClick = () => {
		showModalHandler()
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
					{categories.map(({ id, name }) => <SelectListItem key={id} id={id}>{name}</SelectListItem>)}
				</SelectList>}
			</SelectorWrapper>}
			<InputWrapper>
				<InputField value={amount} name="amount" type="text" placeholder="0.00" required onChange={formFieldHandler} />
				<DateInput onChange={changeDate} value={visibleDate} timeFormat={false} closeOnSelect={true} dateFormat="DD.MM.YYYY" />
			</InputWrapper>
			<Comment value={comment} name="comment" placeholder="Comment" onChange={formFieldHandler}></Comment>
			<SubmitBtn type="submit">Add</SubmitBtn>
		</Form>
		<CancelBtn type="button" onClick={onButtonClick}>Cancel</CancelBtn>
	</AddTransactionsWrapper >
}
