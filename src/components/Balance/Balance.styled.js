import styled from 'styled-components';

export const BalanceWrap = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 80px;

  border-radius: 30px;
  background-color: var(--main-bg-color);

  @media (min-width: 768px) {
    width: 336px;
    /* margin-top: 28px; */
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceContent = styled.div`
  padding: 8px 32px 11px;
  @media (min-width: 768px) {
    padding: 8px 40px 11px;
  }
`;

export const BalanceTitle = styled.p`
  padding-bottom: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #a6a6a6;
`;

export const BalanceTotal = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: var(--main-text-color);
`;

export const BalanceIcon = styled.span`
  font-weight: 400;
`;
