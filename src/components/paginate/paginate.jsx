/* import Material-ui */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export default function Paginate(props) {
  const { next, prev } = props;

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Button onClick={prev}>
          Atrás
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={next}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  );
}