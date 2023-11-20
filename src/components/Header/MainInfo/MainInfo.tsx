import { Avatar, Badge, Typography } from '@mui/material';
import style from './MainInfo.module.scss';
import avatar from '../../../assets/images/smallAvatar.png';
import { Edit } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const MainInfo = () => {
  return (
    <main>
      <div className={style.cover}>
        <div className={style.userInfo}>
          <Badge
            sx={{ width: 70 }}
            overlap="circular"
            badgeContent={<Edit className={style.icon} />}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Avatar src={avatar} className={style.avatar} />
          </Badge>
          <Typography
            fontSize={12}
            fontWeight={500}
            color="#fff"
            sx={{ marginTop: '12px' }}
          >
            Ольга Терентьева
          </Typography>
          <Typography
            fontSize={10}
            fontWeight={400}
            color="#707EF9"
            sx={{ marginTop: '-2px' }}
          >
            Администратор
          </Typography>
        </div>
      </div>
      <div className={style.contentBox}>
        <nav className={style.navigation}>
          <NavLink to="/visitors">
            <Typography>Посетители</Typography>
          </NavLink>
          <NavLink to="/instructors">
            <Typography>Инструкторы</Typography>
          </NavLink>
          <NavLink to="/ski-pass">
            <Typography>Ски-пассы</Typography>
          </NavLink>
        </nav>
      </div>
    </main>
  );
};

export default MainInfo;
