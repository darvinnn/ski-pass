import { Button, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
}

const MainButton = (props: PropsWithChildren<Props>) => {
  const MainButtonEl = styled(Button)({
    borderRadius: '21px',
    height: '46px',
    width: '169px',
    boxShadow: 'none',
    padding: '12px 32px 9px',
    backgroundColor: '#4158f6',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'none',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#263dd1',
    },
  });

  return (
    <MainButtonEl {...props} variant="contained">
      {props.children}
    </MainButtonEl>
  );
};

export default MainButton;
