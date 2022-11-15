import styled from 'styled-components';
import WaveDesk from '../../images/currency/Wave_desk.svg';
import WaveTab from '../../images/currency/Wave_tab.svg';
import WaveMob from '../../images/currency/Wave_mob.svg';

export const TableWrap = styled.div`
  width: 280px;
  height: 174px;
  margin: 0 auto;

  border-radius: 30px;
  color: var(--main-bg-color);
  background-repeat: no-repeat;
  background-position: bottom;

  background-image: url(${WaveMob}),
    linear-gradient(
      to bottom,
      rgb(74, 86, 226, 0.8) 50px,
      var(--search-text-color) 50px
    );

  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
    margin: 0;

    background-image: url(${WaveTab}),
      linear-gradient(
        to bottom,
        rgb(74, 86, 226, 0.8) 50px,
        var(--search-text-color) 50px
      );
  }

  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;

    background-image: url(${WaveDesk}),
      linear-gradient(
        to bottom,
        rgb(74, 86, 226, 0.8) 60px,
        var(--search-text-color) 60px
      );
  }
`;

export const Table = styled.table`
  width: 100%;
  padding: 11px 17px 20px 20px;

  @media (min-width: 768px) {
    padding: 11px 20px 20px 20px;
  }
  @media (min-width: 1280px) {
    padding: 17px 60px 17px 44px;
  }
`;

export const TableTitle = styled.th`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 28px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 36px;
  }
`;

export const TableText = styled.td`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 12px;

  @media (min-width: 1280px) {
    padding-bottom: 24px;
  }
`;


export const TextError = styled.p`
  width: 70%;
  text-align: center;
  margin: 0 auto;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 80px 10px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    padding: 120px 10px;
    font-size: 24px;
  }
`;

export const TableRow = styled.tr``;
