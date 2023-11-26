import { Add } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

const AddButton = ({ children }: PropsWithChildren) => {
  const AddButtonEl = styled(Button)({
    borderRadius: '8px',
    height: '32px',
    padding: '5px 14px',
    border: '1px solid #4158F6',
    color: '#4158F6',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'none',
    '&:hover': {
      border: '1px solid #1a30be',
    },
  });

  return (
    <AddButtonEl
      variant="outlined"
      startIcon={<Add sx={{ fill: '#4158F6' }} />}
    >
      {children}
    </AddButtonEl>
  );
};

export default AddButton;
