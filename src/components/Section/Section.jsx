import { SectionTag } from "./Section.styled"

export const Section = ({ children, location }) => {
	return <SectionTag location={location}>{children}</SectionTag>
}