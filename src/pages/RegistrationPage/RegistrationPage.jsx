import { useLocation } from "react-router-dom";
import { RegisterForm } from 'components/RegistrationForm/RegistrationForm';
import { Container } from 'components/Container/Container';
import { Main } from 'components/Main/Main';
import { Section } from 'components/Section/Section';
import { ImageAndTitleWrapper, PageTitle, RegisterFormContainer, Image } from "./RegistrationPage.styled"

const RegistrationPage = () => {
	const location = useLocation();

	return (
		<>
			<Main location={location.pathname}>
				<Section>
					<Container>
						<RegisterFormContainer>
							<ImageAndTitleWrapper>
								<Image />
								<PageTitle>Finance App</PageTitle>
							</ImageAndTitleWrapper>
							<RegisterForm />
						</RegisterFormContainer>
					</Container>
				</Section>
			</Main>
		</>
	);
};
export default RegistrationPage;
