import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { Logout, Menu, Search } from '@mui/icons-material';
import style from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { FC } from 'react';

const Header: FC = () => {
  const ExitButton = styled(Button)({
    marginLeft: 'auto',
  });
  const SearchInput = styled(InputBase)({
    flexGrow: 1,
    '& .MuiInputBase-input': {
      padding: '0 0 0 7px',
      height: '100%',
      color: '#FFFFFF',
      '&::placeholder': {
        color: '#87AFEB',
      },
    },
  });
  const location = useLocation().pathname;

  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/login');
  };

  if (location === '/login') return;

  return (
    <AppBar position="static">
      <Toolbar className={style.toolbar}>
        <IconButton size="large">
          <Menu />
        </IconButton>
        <Typography
          fontWeight={400}
          fontSize={13}
          textTransform={'uppercase'}
          width={115}
          marginLeft="20px"
        >
          Горнолыжный курорт
        </Typography>
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
