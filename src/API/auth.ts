import axios from 'axios';
import { AUTH_URL } from '../constants/globalVariables';

const auth = () =>
  axios.post(
    AUTH_URL,
    {
      client_id: 'login-app',
      grant_type: 'password',
      scope: 'openid',
      username: 'admin',
      password: 'admin',
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

export default auth;
