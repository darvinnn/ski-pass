import { FC } from 'react';
import Header from '../Header/Header';

interface Props {
  // Не уверен, как правильно типизировать element
  element: FC;
  token?: string;
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
