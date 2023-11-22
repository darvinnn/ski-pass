import { IconButton, Toolbar } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import HeaderTitle from '../../UI/Texts/HeaderTitle';
import HeaderAppBar from '../../UI/Other/HeaderAppBar';
import ExitButton from '../../UI/Buttons/ExitButton';
import SearchInput from '../../UI/Inputs/SearchInput';
import style from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;

  const navigate = useNavigate();

  const handleExit = () => navigate('/login');

  const handleLogo = () => navigate('/');

  if (location === '/login') return;

  return (
    <HeaderAppBar position="absolute" className={style.header}>
      <Toolbar className={style.toolbar}>
        <IconButton sx={{ padding: 0 }} size="large">
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
            <Search className={`${style.icon} ${style.searchIcon}`}></Search>
          </button>
          <SearchInput placeholder="Поиск"></SearchInput>
        </form>
        <ExitButton onClick={handleExit}>Выход</ExitButton>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
