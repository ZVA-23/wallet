import styled from 'styled-components';

export const BalanceWrap = styled.div`
	margin-top: 12px;
  width: 100%;
  height: 80px;

  border-radius: 30px;
  background-color: var(--main-bg-color);

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceContent = styled.div`
  padding: 8px 73px 11px 32px;
  @media (min-width: 768px) {
    padding: 8px 121px 11px 40px;
  }
  @media (min-width: 1280px) {
    padding: 8px 180px 11px 40px;
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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: var(--main-text-color);
`;
