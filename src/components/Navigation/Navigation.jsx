import { ReactComponent as IconHome } from '../../images/svg/home.svg';
import { ReactComponent as IconStatistics } from '../../images/svg/diagram.svg';
import { StyledNavLink, Ul } from './Navigation.styled';

const menu = [
  {
    name: 'home',
    icon: <IconHome width="18" />,
    slash: false,
  },
  {
    name: 'statistics',
    icon: <IconStatistics width="18" />,
    slash: true,
  },
];

export const Navigation = () => {
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
      </Ul>
    </nav>
  );
};
