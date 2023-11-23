import { Grid } from '@mui/material';
import PeopleElement from './PeopleElement/PeopleElement';

const PeopleGrid = () => {
  return (
    <Grid container rowSpacing="15px" columnSpacing="24px">
      <PeopleElement />
      <PeopleElement />
      <PeopleElement />
      <PeopleElement />
      <PeopleElement />
    </Grid>
  );
};

export default PeopleGrid;
