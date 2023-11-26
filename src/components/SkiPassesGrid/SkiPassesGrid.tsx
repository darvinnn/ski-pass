import style from './SkiPassesGrid.module.scss';
import SkiPassesElement from './SkiPassesElement/SkiPassesElement';

const SkiPassesGrid = () => {
  return (
    <ul className={style.container}>
      <SkiPassesElement />
      <SkiPassesElement />
      <SkiPassesElement />
    </ul>
  );
};

export default SkiPassesGrid;
