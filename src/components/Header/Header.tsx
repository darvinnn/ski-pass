import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Logout, Menu, Search } from '@mui/icons-material';
import HeaderTitle from '../../UI/Texts/HeaderTitle';
import ExitButton from '../../UI/Buttons/ExitButton';
import SearchInput from '../../UI/Inputs/SearchInput';
import style from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;

  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/login');
  };

  if (location === '/login') return;

  return (
    <AppBar position="absolute" className={style.header}>
      <Toolbar className={style.toolbar}>
        <IconButton sx={{ padding: 0 }} size="large">
          <Menu />
        </IconButton>
        <HeaderTitle>Горнолыжный курорт</HeaderTitle>
        <form
          className={style.searchField}
          onSubmit={(e: React.SyntheticEvent) => e.preventDefault()}
        >
          <button type="submit" className={style.searchButton}>
            <Search className={style.searchIcon}></Search>
          </button>
          <SearchInput placeholder="Поиск"></SearchInput>
        </form>
        <ExitButton variant="text" startIcon={<Logout />} onClick={handleExit}>
          Выход
        </ExitButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
