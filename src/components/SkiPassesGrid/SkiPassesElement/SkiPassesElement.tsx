import { MoreVert } from '@mui/icons-material';
import SkiPassPriceText from './UI/SkiPassPriceText';
import SkiPassTimeText from './UI/SkiPassTimeText';
import style from './SkiPassesElement.module.scss';

const SkiPassesElement = () => {
  return (
    <li className={style.item}>
      <SkiPassTimeText>Дневной 8:30-16:00</SkiPassTimeText>
      <SkiPassPriceText>3150 р</SkiPassPriceText>
      <MoreVert className={style.moreButton} />
    </li>
  );
};

export default SkiPassesElement;
