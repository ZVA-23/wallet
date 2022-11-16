import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { useMedia } from 'react-use';
import { NavAndInfoWrapper } from './UserPanel.styled';

export const UserPanel = () => {
	const isMobile = useMedia('(max-width: 767px)');
	return (
		<>
			<NavAndInfoWrapper>
				<div>
					<Navigation />
					<Balance />
				</div>
				{!isMobile && <Currency />}
			</NavAndInfoWrapper>
		</>
	);
};
