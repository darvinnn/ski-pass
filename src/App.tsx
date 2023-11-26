import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { StyledEngineProvider } from '@mui/material';
import Header from './components/Header/Header';
import Users from './pages/Users/Users';
import Instructors from './pages/Instructors/Instructors';
import SkiPasses from './pages/SkiPasses/SkiPasses';
import {
  INSTRUCTORS,
  LOGIN,
  SKI_PASSES,
  USERS,
} from './constants/navigationConstants';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
        <Routes>
          <Route path={'/' + LOGIN} element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path={'/' + USERS} element={<Users />} />
          <Route path={'/' + INSTRUCTORS} element={<Instructors />} />
          <Route path={'/' + SKI_PASSES} element={<SkiPasses />} />
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
