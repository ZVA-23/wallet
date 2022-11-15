import { useLocation } from 'react-router-dom';
import { UserPanel } from '../../components/UserPanel/UserPanel';
import { Main } from 'components/Main/Main';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';

const StatisticsSubPage = () => {
	const location = useLocation();

	return (
		<Main location={location.pathname}>
			<Section>
				<Container>
					<UserPanel />
					<div>Statistic</div>
				</Container>
			</Section>
		</Main>
	)
}

export default StatisticsSubPage;
