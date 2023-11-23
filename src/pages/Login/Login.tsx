import style from './Login.module.scss';
import HelmetImage from '../../assets/icons/helmet.svg?react';
import VkIcon from '../../assets/icons/vk.svg?react';
import FbIcon from '../../assets/icons/fb.svg?react';
import GoogleIcon from '../../assets/icons/google.svg?react';
import LoginAccentText from '../../UI/Texts/LoginAccentText';
import LogitTitleText from '../../UI/Texts/LoginTitleText';
import LoginButtomText from '../../UI/Texts/LoginButtomText';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../UI/Inputs/TextInput';
import MainButton from '../../UI/Buttons/MainButton';

const Login = () => {
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
          <TextInput placeholder="Имя" />
          <TextInput placeholder="Пароль" />
          <MainButton type="submit" className={style.submitButton}>
            Войти
          </MainButton>
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
    </main>
  );
};

export default Login;
