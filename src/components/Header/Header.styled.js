import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 48px;
    padding: 20px 0;
	 background-color: var(--main-bg-color);
`

export const HeaderWrapper = styled.div`
	display: flex;
    align-items: center;
	 justify-content: space-between;
`

export const Wrapper = styled.div`
	position: relative;
    display: flex;
    align-items: center;
	 justify-content: space-between;
	 gap: 8px;
    gap: ${(p) => p.gap};
    font-size: 18px;
    color: #BDBDBD;

	 @media (min-width: 768px)  {
		:before{
		content: "";
		position: absolute;
		top: 0;
		left: -12px;
		width: 1px;
		height: 30px;
		background-color: #BDBDBD;
		}
	}
`
export const LogOutWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	color: #BDBDBD;

	@media (min-width: 768px)  {
		gap: 24px;
	}
`

export const Bg = styled.div`
position: absolute;
left: 0;
right 0;
z-index: -1;
height: 88px;
background-color: #fff;
`