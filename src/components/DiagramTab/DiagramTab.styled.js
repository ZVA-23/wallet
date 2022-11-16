import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin-top: 43px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    max-width: 747px;
    margin-top: 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 20px 0;
    max-width: 336px;

  }

  @media screen and (min-width: 1280px) {
    /* width: 395px; */
  }
`;

export const BoxChart = styled.div`
  display: block;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
  /* max-width: 450px; */
  width: 100%;
  
  @media screen and (min-width: 768px) {
    max-width: 336px;
    margin-top: 20px;

    max-width: none;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const BoxTitle = styled.div`
  display: block;
  margin-top: 8px;
  /* max-width: 280px; */
  width: 280px;
  /* width: 100%; */
  
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.h2`
  width: 135px;
  height: 45px;
  font-family: "Poppins";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(45 / 30);
`;

export const BoxSelect = styled.div`
  
`;

export const Table = styled.table`
  /* table-layout: fixed; */
  border-collapse: collapse;
  width: 100%;

  line-height: calc(27 / 18);
  
  background-color: transparent;
  /* border-radius: 10px; */

  &:not(:first-child) {
    /* margin-top: 8px; */
  }
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
  /* padding: 0 20px; */
  height: 54px;

  font-weight: ${p => p.total && 700};

  &:not(:last-child) && {!(p => p.total)} {
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

  /* background-color: var(--main-bg-color); */

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