import { Logout } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  onClick: () => void;
}

const ExitButton = (props: PropsWithChildren<Props>) => {
  const ExitButtonEl = styled(Button)({
    marginLeft: 38,
    color: '#fff',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    textTransform: 'none',
  });

  return (
    <ExitButtonEl variant="text" startIcon={<Logout />} onClick={props.onClick}>
      {props.children}
    </ExitButtonEl>
  );
};

export default ExitButton;
