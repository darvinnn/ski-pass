import { Grid } from '@mui/material';
import PeopleElement from './PeopleElement/PeopleElement';
import style from './PeopleGrid.module.scss';
const PeopleGrid = ({ data }) => {
  return (
    <Grid
      container
      rowSpacing="15px"
      columnSpacing="24px"
      className={style.grid}
    >
      {data.map((person) => (
        <PeopleElement key={person.id} />
      ))}
    </Grid>
  );
};

export default PeopleGrid;
