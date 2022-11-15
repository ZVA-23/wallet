import { MainTag } from "./Main.styled"

export const Main = ({ children, location }) => {
	return <MainTag location={location}>{children}</MainTag>
}