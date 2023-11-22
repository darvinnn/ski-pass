import { TextField, styled } from '@mui/material';

const TextInput = styled(TextField)({
  marginTop: '12px',
  width: '100%',
  backgroundColor: '#f3f3f3',
  border: 'none',
  outline: 'none',
  borderRadius: '10px',
  '& .MuiInputBase-input': {
    padding: '17px 16px 14px',
    boxSizing: 'border-box',
    height: '44px',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    textTransform: 'capitalize',
    '&::placeholder': {
      color: '#d3d3d3',
      opacity: '1',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

export default TextInput;
