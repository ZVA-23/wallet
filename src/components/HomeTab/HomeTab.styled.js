import styled from 'styled-components';

export const Box = styled.div`
	margin-top: 32px;
  display: inline-block;
  width: 100%;
  height: 70vh;

  overflow-y: auto;

  @media screen and (min-width: 768px) {
    /* width: 704px; */
	  margin-top: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
	  margin-top: 0;
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;

  line-height: 1.5;
  
  background-color: transparent;
  background-image: linear-gradient(
    to right, 
    ${p => p.type === "INCOME" ?
    "var(--incom-text-color) 5px, var(--main-bg-color) 5px" :
    "var(--expense-text-color) 5px, var(--main-bg-color) 5px"},
    var(--main-bg-color) 100%);
  
   border-radius: 10px;

  &:not(:first-child) {
    margin-top: 8px;
  }

  @media screen and (min-width: 768px) {
    background-image: none;
    border-radius: none;
  }
`;

export const THead = styled.thead`
  position: sticky;
  top: 0px;
  
  height: 58px;

  text-align: left;
  background-color: var(--main-bg-color);

  & > Tr {
    padding: 16px 20px 15px;
  }
`;

export const TBody = styled.tbody`
`;

export const Tr = styled.tr`
  padding: 0 20px;
  height: 54px;

  &:not(:last-child) {
    border-bottom: 1px solid #DCDCDF;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const Th = styled.th`
  padding: 14px 20px;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: ${p => (p.left && "left") || (p.center && "center") || (p.right && "right")};

  @media screen and (min-width: 768px) {
    &:first-child {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }
    &:last-child {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
`;

export const Td = styled.td`
  padding: 0px 20px;
  letter-spacing: 1px;
  font-weight: ${p => p.sum && 700};
  text-align: ${p => (p.center && "center") || (p.right && "right")};
  color: ${p => (p.typeTransaction === "INCOME" && p.sum ?
    "var(--incom-text-color)" :
    p.sum && "var(--expense-text-color)")};

  white-space: ${p => p.comment && "nowrap"};
  overflow: ${p => p.comment && "hidden"};
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const NoTransactions = styled.p`
  font-style: italic;
  text-align: center;
`;