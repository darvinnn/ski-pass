import { Grid } from '@mui/material';
import PeopleElement from './PeopleElement/PeopleElement';
import style from './PeopleGrid.module.scss';
const PeopleGrid = () => {
  return (
    <Grid
      container
      rowSpacing="15px"
      columnSpacing="24px"
      className={style.grid}
    >
      <PeopleElement />
      <PeopleElement />
      <PeopleElement />
      <PeopleElement />
      <PeopleElement />
    </Grid>
  );
};

export default PeopleGrid;
