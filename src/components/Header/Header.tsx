import { IconButton, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import HeaderTitle from './UI/HeaderTitle';
import HeaderAppBar from './UI/HeaderAppBar';
import ExitButton from './UI/ExitButton';
import SearchInput from './UI/SearchInput';
import SearchButton from './UI/SearchButton';
import style from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../constants/navigationConstants';

const Header = () => {
  const navigate = useNavigate();
  const handleExit = () => navigate(LOGIN);
  const handleLogo = () => navigate('/');

  return (
    <HeaderAppBar position="static">
      <Toolbar className={style.toolbar}>
        <IconButton className={style.iconButton}>
          <Menu className={style.icon} />
        </IconButton>
        <HeaderTitle className={style.logo} onClick={handleLogo}>
          Горнолыжный курорт
        </HeaderTitle>
        <form
          className={style.searchField}
          onSubmit={(e: React.SyntheticEvent) => e.preventDefault()}
        >
          <SearchButton type="submit" />
          <SearchInput placeholder="Поиск" />
        </form>
        <ExitButton onClick={handleExit} className={style.exitButton}>
          Выход
        </ExitButton>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
