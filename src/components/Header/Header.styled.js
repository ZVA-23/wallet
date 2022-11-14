import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 48px;
    padding: 20px 0;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${(p) => p.gap};
    font-size: 18px;
    color: #BDBDBD;
`

export const Bg = styled.div`
position: absolute;
left: 0;
right 0;
z-index: -1;
height: 88px;
background-color: #fff;
`