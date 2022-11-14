import { ThreeDots } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center'}} >
    <Spiner>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4a56e2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </Spiner>
    </div>
  );
};
