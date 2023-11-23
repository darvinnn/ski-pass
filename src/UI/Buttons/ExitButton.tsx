import { Logout } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void;
  className?: string;
}

const ExitButton = (props: PropsWithChildren<Props>) => {
  const ExitButtonEl = styled(Button)({
    color: '#fff',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    textTransform: 'none',
  });

  return (
    <ExitButtonEl variant="text" startIcon={<Logout />} {...props}>
      {props.children}
    </ExitButtonEl>
  );
};

export default ExitButton;
