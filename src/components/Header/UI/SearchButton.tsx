import { Search } from '@mui/icons-material';
import { Button } from '@mui/material';

interface Props {
  type?: 'submit' | 'reset' | 'button';
}

const SearchButton = ({ type }: Props) => {
  return (
    <Button type={type} sx={{ padding: 0, minWidth: 'auto' }}>
      <Search sx={{ fill: '#eee' }} />
    </Button>
  );
};

export default SearchButton;
