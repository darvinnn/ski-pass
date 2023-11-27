import { FC } from 'react';
import Header from '../Header/Header';

interface Props {
  element: FC;
}

const HeaderWrapper = ({ element: Component, ...props }: Props) => {
  return (
    <>
      <Header />
      <Component {...props} />
    </>
  );
};

export default HeaderWrapper;
