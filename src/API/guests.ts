import axios from 'axios';
import { URL } from '../constants/globalVariables';

// TODO: типизировать
export const getGuests = (token: string) =>
  axios.get(URL + '/guest', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
