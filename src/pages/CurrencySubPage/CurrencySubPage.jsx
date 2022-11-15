import { Currency } from 'components/Currency/Currency';
import { useMedia } from 'react-use';

export const CurrencySubPage = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return <>{isMobile && <Currency />}</>;
};
