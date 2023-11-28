import { InputBase, styled } from '@mui/material';

const SearchInput = styled(InputBase)({
  flexGrow: 1,
  '& .MuiInputBase-input': {
    padding: '0 0 0 7px',
    height: '100%',
    color: '#FFFFFF',
    '&::placeholder': {
      color: '#87AFEB',
    },
  },
});

export default SearchInput;
