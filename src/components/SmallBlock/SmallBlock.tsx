import style from './SmallBlock.module.scss';
import ArrowUp from '../../assets/icons/arrowUp.svg?react';
import { IconButton } from '@mui/material';
import AllButton from '../../UI/Buttons/AllButton';
import { NavLink } from 'react-router-dom';
import PeopleGrid from '../PeopleGrid/PeopleGrid';
import SkiPassesGrid from '../SkiPassesGrid/SkiPassesGrid';

interface Props {
  type: 'users' | 'instructors' | 'ski-passes';
}
const SmallBlock = ({ type }: Props) => {
  return (
    <div className={style.container}>
      <IconButton className={style.arrowUp}>
        <ArrowUp />
      </IconButton>
      <NavLink to={'/' + type} className={style.allButton}>
        <AllButton>Все</AllButton>
      </NavLink>
      {(type === 'instructors' || type === 'users') && <PeopleGrid />}
      {type === 'ski-passes' && <SkiPassesGrid />}
    </div>
  );
};

export default SmallBlock;
