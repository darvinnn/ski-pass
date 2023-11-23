import { ArrowForward } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void;
  className?: string;
}

const AllButton = (props: PropsWithChildren<Props>) => {
  const AllButtonEl = styled(Button)({
    color: '#4158F6',
    minWidth: 'auto',
    padding: 0,
    width: 34,
    height: 12,
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '12px',
    textTransform: 'capitalize',
  });

  return (
    <AllButtonEl
      variant="text"
      endIcon={<ArrowForward sx={{ width: 8, height: 8 }} />}
      {...props}
    >
      {props.children}
    </AllButtonEl>
  );
};

export default AllButton;
