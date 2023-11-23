import style from './SkiPassesGrid.module.scss';
import SkiPassesItem from './SkiPassesItem/SkiPassesItem';

const SkiPassesGrid = () => {
  return (
    <ul className={style.container}>
      <SkiPassesItem />
    </ul>
  );
};

export default SkiPassesGrid;
