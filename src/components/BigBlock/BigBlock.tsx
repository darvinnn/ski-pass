import { PropsWithChildren } from 'react';
import PeopleGrid from '../PeopleGrid/PeopleGrid';
import style from './BigBlock.module.scss';
import SkiPassesGrid from '../SkiPassesGrid/SkiPassesGrid';

interface Props {
  type: 'users' | 'instructors' | 'ski-passes';
}

const BigBlock = ({ type }: PropsWithChildren<Props>) => {
  return (
    <section className={style.container}>
      {(type === 'instructors' || type === 'users') && <PeopleGrid />}
      {type === 'ski-passes' && <SkiPassesGrid />}
    </section>
  );
};

export default BigBlock;
