import { FC } from 'react';
import style from './Login.module.scss';
import bgImage from '../../assets/images/login-bg.jpeg';
import HelmetImage from '../../assets/icons/helmet.svg?react';
import VkIcon from '../../assets/icons/vk.svg?react';
import FbIcon from '../../assets/icons/fb.svg?react';
import GoogleIcon from '../../assets/icons/google.svg?react';
import { Button, TextField, Typography } from '@mui/material';

const Login: FC = () => {
  return (
    <main className={style.login}>
      <section className={style.container}>
        <HelmetImage />
        <Typography
          fontWeight={700}
          fontSize={18}
          margin="16px 0 0"
          textTransform={'uppercase'}
          textAlign="center"
          lineHeight="111.687%"
        >
          <Typography color="#4158F6" fontWeight={700} fontSize="14px">
            личный кабинет
          </Typography>
          Горнолыжного курорта
        </Typography>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TextField placeholder="Имя"></TextField>
          <TextField placeholder="Пароль"></TextField>
          <Button type="submit" style={{ marginTop: 40 }} variant="contained">
            Войти
          </Button>
        </form>
        <div className={style.links}>
          <GoogleIcon />
          <FbIcon />
          <VkIcon />
        </div>
        <a href="#">
          <Typography
            fontSize={12}
            lineHeight="14px"
            color="#1371FA"
            sx={{ textDecoration: 'underline', marginTop: '27px' }}
          >
            Зарегистрироваться
          </Typography>
        </a>
      </section>
      <img className={style.bg} src={bgImage} />
    </main>
  );
};

export default Login;
