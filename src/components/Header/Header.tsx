import { IconButton, Toolbar } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import HeaderTitle from './UI/HeaderTitle';
import HeaderAppBar from './UI/HeaderAppBar';
import ExitButton from './UI/ExitButton';
import SearchInput from './UI/SearchInput';
import style from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN } from '../../constants/navigationConstants';

const Header = () => {
  const location = useLocation().pathname;

  const navigate = useNavigate();

  const handleExit = () => navigate('/' + LOGIN);

  const handleLogo = () => navigate('/');

  if (location === '/' + LOGIN) return;

  return (
    <HeaderAppBar position="absolute" className={style.header}>
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
          <button type="submit" className={style.searchButton}>
            <Search className={`${style.icon} ${style.searchIcon}`} />
          </button>
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
