import { FC } from 'react';
import style from './Login.module.scss';
import bgImage from '../../assets/images/login-bg.jpeg';
import HelmetImage from '../../assets/icons/helmet.svg?react';
import VkIcon from '../../assets/icons/vk.svg?react';
import FbIcon from '../../assets/icons/fb.svg?react';
import GoogleIcon from '../../assets/icons/google.svg?react';
import LoginAccentText from '../../UI/Texts/LoginAccentText';
import LogitTitleText from '../../UI/Texts/LoginTitleText';
import LoginButtomText from '../../UI/Texts/LoginButtomText';
import { Button, TextField } from '@mui/material';
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
        <LoginAccentText>Личный кабинет</LoginAccentText>
        <LogitTitleText>Горнолыжного курорта</LogitTitleText>
        <form className={style.form} onSubmit={handleSubmit}>
          <TextField placeholder="Имя"></TextField>
          <TextField placeholder="Пароль"></TextField>
          <Button
            type="submit"
            className={style.submitButton}
            variant="contained"
          >
            Войти
          </Button>
        </form>
        <div className={style.links}>
          <GoogleIcon />
          <FbIcon />
          <VkIcon />
        </div>
        <a href="/login">
          <LoginButtomText>Зарегистрироваться</LoginButtomText>
        </a>
      </section>
      <img className={style.bg} src={bgImage} />
    </main>
  );
};

export default Login;
