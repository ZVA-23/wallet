import { ReactComponent as IconHome } from '../../images/svg/home.svg';
import { ReactComponent as IconStatistics } from '../../images/svg/diagram.svg';
import { ReactComponent as IconCurrency } from '../../images/svg/currency.svg';
import { StyledNavLink, Ul } from './Navigation.styled';
import { useMedia } from 'react-use';

const menu = [
  {
    name: 'home',
    icon: <IconHome width="18" />,
  },
  {
    name: 'statistics',
    icon: <IconStatistics width="18" />,
  },
];

const currency = {
  name: 'currency',
  icon: <IconCurrency width="18" />,
};

export const Navigation = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <nav>
      <Ul>
        {menu.map(item => (
          <li key={item.name}>
            <StyledNavLink to={item.slash ? item.name : `/${item.name}`}>
              {item.icon}
              {item.name[0].toUpperCase() + item.name.slice(1)}
            </StyledNavLink>
          </li>
        ))}
        {isMobile && (
          <li>
            <StyledNavLink
              to={currency.slash ? currency.name : `/${currency.name}`}
            >
              {currency.icon}
              {currency.name[0].toUpperCase() + currency.name.slice(1)}
            </StyledNavLink>
          </li>
        )}
      </Ul>
    </nav>
  );
};
