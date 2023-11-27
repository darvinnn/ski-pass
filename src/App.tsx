import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { StyledEngineProvider } from '@mui/material';
import Users from './pages/Users/Users';
import Instructors from './pages/Instructors/Instructors';
import SkiPasses from './pages/SkiPasses/SkiPasses';
import {
  INSTRUCTORS,
  LOGIN,
  SKI_PASSES,
  USERS,
} from './constants/navigationConstants';
import HeaderWrapper from './components/HeaderWrapper/HeaderWrapper';

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path="/" element={<HeaderWrapper element={Main} />} />
          <Route path={USERS} element={<HeaderWrapper element={Users} />} />
          <Route
            path={INSTRUCTORS}
            element={<HeaderWrapper element={Instructors} />}
          />
          <Route
            path={SKI_PASSES}
            element={<HeaderWrapper element={SkiPasses} />}
          />
        </Routes>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
