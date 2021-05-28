/* import Material-ui */
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Search(props) {
  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
    </Grid>
  );
}