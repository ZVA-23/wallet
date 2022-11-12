import styled from 'styled-components';

export const Box = styled.div`
  display: inline-block;
  max-width: 715px;
  width: 100%;
  height: 60vh;
  overflow-y: auto;
`;

export const Table = styled.table`
  /* table-layout: fixed; */
  border-collapse: collapse;
  width: 100%;

  font-weight: 400;
  line-height: 1.5;
  background-color: transparent;
`;

export const THead = styled.thead`
  position: sticky;
  top: 0px;
  
  height: 58px;

  font-size: 18px;
  font-weight: 700;
  text-align: left;

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
  padding: 14px 20px;;
  background-color: var(--main-bg-color);
  letter-spacing: 2px;
  text-align: ${p => (p.center && "center") || (p.right && "right")};
  
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
  padding: 0px 20px;
  letter-spacing: 1px;
  font-weight: ${p => p.sum && 700};
  text-align: ${p => (p.center && "center") || (p.right && "right")};
  color: ${p => (p.type === "INCOME" && p.sum ?
    "var(--accent-color)" :
    p.sum && "var(--expense-text-color)")};

  /* white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; */
`;
