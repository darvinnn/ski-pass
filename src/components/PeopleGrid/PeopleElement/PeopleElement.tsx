import { Grid } from '@mui/material';
import style from './PeopleElement.module.scss';
import userPNG from '../../../assets/images/user.jpg';
import UserNameText from './UI/UserNameText';
import UserAgeText from './UI/UserAgeText';
import { MoreVert } from '@mui/icons-material';

const PeopleElement = () => {
  return (
    <Grid item xs={6} className={style.container}>
      <img src={userPNG} className={style.image} />
      <div className={style.info}>
        <UserNameText>Борис Стрелков</UserNameText>
        <UserAgeText>31 год</UserAgeText>
      </div>
      <MoreVert className={style.moreButton} />
    </Grid>
  );
};

export default PeopleElement;
