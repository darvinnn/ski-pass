import { MoreVert } from '@mui/icons-material';
import SkiPassPriceText from '../../../UI/Texts/SkiPassPriceText';
import SkiPassTimeText from '../../../UI/Texts/SkiPassTimeText';
import style from './SkiPassesItem.module.scss';

const SkiPassesItem = () => {
  return (
    <li className={style.item}>
      <SkiPassTimeText>Дневной 8:30-16:00</SkiPassTimeText>
      <SkiPassPriceText>3150 р</SkiPassPriceText>
      <MoreVert className={style.moreButton} />
    </li>
  );
};

export default SkiPassesItem;
