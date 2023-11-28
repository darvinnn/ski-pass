import { PropsWithChildren } from 'react';
import PeopleGrid from '../PeopleGrid/PeopleGrid';
import style from './BigBlock.module.scss';
import SkiPassesGrid from '../SkiPassesGrid/SkiPassesGrid';
import { ContentType } from '../../types/BasicBlockTypes';

interface Props {
  type: ContentType;
  data?: any;
}

const BigBlock = ({ type, data }: PropsWithChildren<Props>) => {
  return (
    <section className={style.container}>
      {(type === 'instructors' || type === 'users') && (
        <PeopleGrid data={data} />
      )}
      {type === 'ski-passes' && <SkiPassesGrid />}
    </section>
  );
};

export default BigBlock;
