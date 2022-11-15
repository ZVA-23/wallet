import { useLocation } from "react-router-dom";
import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Main } from 'components/Main/Main';
import { Section } from 'components/Section/Section';
import { LoginWrapper, ImageAndTitleWrapper, Image, PageTitle } from "./LoginPage.styled"

const LoginPage = () => {
	const location = useLocation();

	return <Main location={location.pathname}>
		<Section>
			<Container>
				<LoginWrapper>
					<ImageAndTitleWrapper>
						<Image />
						<PageTitle>Finance App</PageTitle>
					</ImageAndTitleWrapper>
					<LoginForm />
				</LoginWrapper>
			</Container>
		</Section>
	</Main>
};

export default LoginPage;
