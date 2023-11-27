import { Switch, styled } from '@mui/material';

const AdminSwitch = styled(Switch)({
  width: 38,
  height: 22,
  padding: 0,
  borderRadius: '13px',
  '& .MuiSwitch-thumb': {
    width: 18,
    height: 18,
  },
  '& .MuiSwitch-switchBase': {
    width: 18,
    height: 18,
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#95C763',
        opacity: 1,
        border: 0,
      },
    },
  },
});

export default AdminSwitch;
