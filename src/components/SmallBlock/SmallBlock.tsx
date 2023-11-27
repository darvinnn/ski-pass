import style from './SmallBlock.module.scss';
import { IconButton } from '@mui/material';
import AllButton from './UI/AllButton';
import { NavLink } from 'react-router-dom';
import PeopleGrid from '../PeopleGrid/PeopleGrid';
import SkiPassesGrid from '../SkiPassesGrid/SkiPassesGrid';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ContentType } from '../../types/BasicBlockTypes';

interface Props {
  type: ContentType;
}
const SmallBlock = ({ type, data }: Props) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <section className={style.container}>
      <IconButton
        className={style.arrow}
        onClick={() => setIsHidden((prev) => !prev)}
      >
        {isHidden ? <ExpandMore /> : <ExpandLess />}
      </IconButton>
      {!isHidden && (
        <NavLink to={'/' + type} className={style.allButton}>
          <AllButton>Все</AllButton>
        </NavLink>
      )}
      {(type === 'instructors' || type === 'users') && !isHidden && (
        <PeopleGrid data={data} />
      )}
      {type === 'ski-passes' && !isHidden && <SkiPassesGrid />}
    </section>
  );
};

export default SmallBlock;
