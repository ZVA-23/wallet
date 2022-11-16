import styled from 'styled-components';

export const TableStyle = styled.table`
  /* table-layout: fixed; */
  border-collapse: collapse;
  width: 100%;

  line-height: calc(27 / 18);
  
  background-color: transparent;
`;

export const THead = styled.thead`
  position: sticky;
  top: 0px;
  
  height: 58px;

  text-align: left;
  background-color: var(--main-bg-color);
`;

export const TBody = styled.tbody`
`;

export const Tr = styled.tr`
  height: 54px;
  font-weight: ${p => p.total && 700};

  &:not(:last-child) {
    border-bottom: ${p => !p.total && "1px solid #DCDCDF"};
    box-shadow: ${p => !p.total && "0px 1px 0px rgba(255, 255, 255, 0.6)"};
  }
`;

export const Th = styled.th`
  padding: 14px 20px;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: ${p => (p.left && "left") || (p.center && "center") || (p.right && "right")};

  background-color: var(--main-bg-color);
  border-color: var(--main-bg-color);


  &:first-child {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  &:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const Td = styled.td`
  position: relative;
  
  padding: 0px 20px;
  letter-spacing: 1px;
  font-weight: ${p => p.sum && 700};
  text-align: ${p => (p.left && "left") || (p.center && "center") || (p.right && "right")};
  color: ${p => (p.typeTransaction === "INCOME" && p.sum ?
    "var(--incom-text-color)" :
    p.sum && "var(--expense-text-color)")
    || (p.income && "var(--incom-text-color)")
    || (p.expense && "var(--expense-text-color)")};

  /* white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; */
`;

export const NoTransactions = styled.p`
  font-style: italic;
  text-align: center;
`;

export const IconQuare = styled.p`
  padding-left: 40px;

  &::before{
		content: "";
		position: absolute;
		top: 13px;
		left: 20px;

		width: 24px;
		height: 24px;

    background-color: ${p => p.color};
	}
`;