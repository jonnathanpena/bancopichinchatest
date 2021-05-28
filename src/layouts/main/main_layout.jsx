/* import Material-ui */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/* import components */
import Search from '../../components/search';
import Content from '../../components/content';
import Paginate from '../../components/paginate';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '80%',
    margin: 'auto',
    marginTop: 25,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
}));

export default function MainLayout(props) {
  const { result, prev, next } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid item xs={12}>
        <Content 
          data={ result }
        />
      </Grid>
      <Grid item xs={12}>
        <Paginate 
          next={prev}
          prev={next}
        />
      </Grid>
    </Grid>
  );
}