/* import Material-ui */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/* import components */
import Card from '../card';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 25
  }
}));

export default function Content(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Grid container justify="flex-start" className={classes.container}>
      {
        data.map((info, index) => (
          <Card 
            key={index} 
            data={ info }
          />
        ))
      }
    </Grid>
  );
}