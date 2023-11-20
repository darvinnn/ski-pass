import { FC } from 'react';
import style from './Login.module.scss';
import bgImage from '../../assets/images/login-bg.jpeg';
import HelmetImage from '../../assets/icons/helmet.svg?react';
import VkIcon from '../../assets/icons/vk.svg?react';
import FbIcon from '../../assets/icons/fb.svg?react';
import GoogleIcon from '../../assets/icons/google.svg?react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main className={style.login}>
      <section className={style.container}>
        <HelmetImage />
        <Typography
          margin="16px 0 0"
          color="#4158F6"
          fontWeight={700}
          fontSize={14}
          textTransform={'uppercase'}
        >
          Личный кабинет
        </Typography>
        <Typography
          fontWeight={700}
          fontSize={18}
          textTransform={'uppercase'}
          textAlign="center"
          lineHeight="111.687%"
        >
          Горнолыжного курорта
        </Typography>
        <form className={style.form} onSubmit={handleSubmit}>
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
        <a href="/login">
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
