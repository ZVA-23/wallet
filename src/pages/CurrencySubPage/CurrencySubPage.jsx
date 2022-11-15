import { Currency } from 'components/Currency/Currency';
import { useMedia } from 'react-use';
import { Navigation } from 'components/Navigation/Navigation';
import { Main } from 'components/Main/Main';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { useLocation } from 'react-router-dom';

export const CurrencySubPage = () => {
	const isMobile = useMedia('(max-width: 768px)');
	const location = useLocation();

	return <Main location={location.pathname}>
		<Section>
			<Container>
				{isMobile && <><Navigation /><Currency /> </>}
			</Container>
		</Section>
	</Main>;
};
