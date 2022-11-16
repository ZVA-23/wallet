import styled from "styled-components";

export const MainContainer = styled.div`
	position: relative;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 20px;
  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 32px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 16px;
  }
`;
