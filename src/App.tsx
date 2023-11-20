import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { StyledEngineProvider } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
